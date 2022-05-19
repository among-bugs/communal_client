import React from "react";
import './filelist.less'
import File from './file/File'
import { Container, Row, Col, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux";
const FileList = () => {

    const files = useSelector(state => state.files.files)
        .map(file => <File key={file._id} file={file} />)

    const plateFiles = useSelector(state => state.files.files)
    .map(file => <File key={file._id} file={file} />)

    const fileView = useSelector(state => state.files.view)

    if (fileView === "plate") {
        return (
            <div className='fileplate' style={{
                display: 'flex'
            }}>
                <Row>
                    {plateFiles}
                </Row>

            </div>
        )
    }

    if (fileView === 'list') {
        return (
            <div className="filelist" style={{ marginTop: '20px', padding: '4px' }}>
                <Row>
                    <Col md={4} sm={4} lg={4} xs={4}
                        className='text-start'
                        style={{ fontSize: '18px' }}>Файл атауы</Col>
                    <Col md={4} sm={4} lg={4} xs={4}
                        className='text-end'
                        style={{ fontSize: '18px' }}>Құрылған уақыты</Col>
                    <Col md={4} sm={4} lg={4} xs={4}
                        className='text-end'
                        style={{ fontSize: '18px' }}>Көлемі</Col>
                </Row>
                <hr style={{
                    marginBottom: '0px'
                }} />
                {files}
            </div>
        )
    }
}

export default FileList