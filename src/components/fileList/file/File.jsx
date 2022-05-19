import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrentDirs } from "../../../reducers/fileReducer";
import { downloadFile } from "../../../action/file";
import { deleteFile } from "../../../action/file";
import '../../app.css'
import folderlogo from '../../../img/folderlogo.png'
import filelogo from '../../../img/filelogo.png'
import sizeFormat from '../file/sizeFormat'

const File = ({ file }) => {

    const dispatch = useDispatch()

    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)
    
    function openDirHandler(file) {
        if (file.type == 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDirs(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }
    if (fileView === 'list') {
        return (
            <div className="file" onClick={() => openDirHandler(file)} style={{
                borderBottomStyle: 'solid',
                borderBottomColor: '#42A5F5',
                borderBottomWidth: '0.5px'
            }}>
                <Row>
                    <Col
                        className='text-start col-3 col-md-7 col-lg-7 col-xxl-7'
                        style={{ fontSize: '18px' }}>
                        <Row className="" style={{ marginLeft: '4px' }}>
                            <Col className="col-12 col-md-3 col-xxl-1 d-flex justify-content-center align-items-center justify-content-md-center">
                                <img src={file.type == 'dir' ? folderlogo : filelogo}
                                    style={{ width: '60px', height: 'auto' }} alt="" />
                            </Col>
                            <Col className="col-md-9 col-xxl-11 d-flex justify-content-center align-items-center justify-content-sm-start justify-content-lg-start justify-content-xxl-start">
                                {file.name}
                            </Col>
                        </Row>
                    </Col>

                    <Col
                        className='text-end col-5 col-md-3 col-lg-3 col-xxl-3 d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center justify-content-md-start justify-content-lg-start justify-content-xxl-start'
                        style={{ fontSize: '18px' }}>
                        {file.date}
                    </Col>
                    <Col
                        className='text-end col-4 col-md-2 col-xxl-2 d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center'
                        style={{ fontSize: '18px' }}>
                        <Row>
                            <Col sm={4} md={4} lg={3} xs={6}
                                className="d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center justify-content-md-start justify-content-lg-start justify-content-xxl-start">
                                <Row>
                                    <Col sm={3} md={3} lg={3} xs={3}>
                                        {
                                            file.type !== 'dir' ? `${sizeFormat(file.size)}` :
                                                'dir'
                                        }
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={6} md={8} lg={9} xs={6}
                                className="d-flex d-sm-flex justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end justify-content-lg-end justify-content-xxl-end">
                                <Row>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <button className="btn btn-light" style={{
                                            borderStyle: 'solid',
                                            borderColor: '#2196F3',
                                            borderWidth: '1px',
                                            margin: '2px'
                                        }} onClick={(e) => deleteClickHandler(e)
                                        }>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

    if (fileView === 'plate') {
        return (
            <Col sm={6} md={6} lg={3} xs={12} style={{marginTop: '24px'}}>
                <div className="file"  onClick={() => openDirHandler(file)} style={{
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#42A5F5',
                    borderBottomWidth: '0.5px'
                }}>
                    <Row>
                        <Col
                            className='text-center col-12 col-md-12 col-lg-12 col-xxl-12'
                            style={{ fontSize: '18px' }}>
                            <Row >
                                <Col className="d-flex justify-content-center align-items-center justify-content-md-center">
                                    <img src={file.type == 'dir' ? folderlogo : filelogo}
                                        style={{ width: '120px', height: 'auto' }} alt="" />
                                </Col>
                                <Col sm={12} md={12} lg={12} xs={12}
                                    className="text-center d-flex  justify-content-center align-items-center justify-content-sm-center justify-content-lg-center justify-content-xxl-center">
                                    {file.name}
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            className='text-center d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center justify-content-lg-center justify-content-xxl-center'
                            style={{ fontSize: '18px' }}>
                            {/* {file.date} */}
                        </Col>
                        <Col sm={12} md={12} lg={12} xs={12}
                            className=' justify-content-center align-items-center justify-content-sm-center align-items-sm-center'
                            style={{ fontSize: '18px' }}>
                            <Row>
                                <Col >
                                    <Row>
                                        <Col className="d-flex d-sm-flex justify-content-center align-items-center justify-content-sm-end align-items-sm-center justify-content-md-center justify-content-lg-center justify-content-xxl-center" >
                                           
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm={12} md={12} lg={12} xs={12}
                                    className="d-flex d-sm-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center justify-content-lg-center justify-content-xxl-center">
                                    <Row>
                                        <Col sm={12} md={12} lg={12} xs={12}>
                                            <button className="btn btn-light" style={{
                                                borderStyle: 'solid',
                                                borderColor: '#2196F3',
                                                borderWidth: '1px',
                                                margin: '2px'
                                            }} onClick={(e) => deleteClickHandler(e)
                                            }>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* <hr /> */}
                </div>

            </Col>

        )
    }

}

export default File