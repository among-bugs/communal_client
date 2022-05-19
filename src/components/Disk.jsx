import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDir, getFiles, uploadFile } from '../action/file'
import { Container, Row, Col, Navbar } from "react-bootstrap"
import '../components/app.css'
import FileList from '../components/fileList/FileList'

import { setCurrentDirs, setFileView, setPopupDisplay } from "../reducers/fileReducer"
import Popup from "../components/Pupop";
import './disk.css'

const Disk = () => {
    const dispatch = useDispatch()

    const currentDir = useSelector(state =>
        state.files.currentDir
    )

    const dirStack = useSelector(state => state.files.dirStack)

    const [dragEnter, setDragEnter] = useState(false)

    const [sort, setSort] = useState('date')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])


    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDirs(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    return (!dragEnter ?
        <div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <Container style={{ marginTop: '20px' }}>
                <h3 style={{ marginLeft: '4px' }}>Дискке файл жүктеу</h3>
                <Row>
                    <Col sm={12} md={12} lg={12} xs={12} style={{ marginTop: '14px' }}>
                        <Row>
                            <Col sm={12} md={3} lg={3} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                <button className='drive-go-back-btn btn btn-outline-primary d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                    style={{
                                        margin: '4px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                        paddingLeft: '16px',
                                        paddingRight: '16px',
                                        borderRadius: '8px',
                                        background: 'transparent',
                                        borderWidth: '2px',
                                        borderColor: '#42A5F5',
                                        fontSize: '16px',
                                        color: '#1E88E5'
                                    }} onClick={
                                        () => backClickHandler()
                                    }>  <i className="fa fa-arrow-left" style={{ marginRight: '8px' }}></i>  артқа қайту</button>
                            </Col>
                            <Col sm={12} md={3} lg={3} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                <button type='button' className='drive-create-folder-btn btn btn-outline-primary d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                    style={{
                                        margin: '4px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                        paddingLeft: '16px',
                                        paddingRight: '16px',
                                        borderRadius: '8px',
                                        background: 'transparent',
                                        borderWidth: '2px',
                                        borderColor: '#42A5F5',
                                        fontSize: '16px',
                                        color: '#1E88E5'
                                    }} onClick={() => showPopupHandler()}>
                                    <i className="fa fa-folder" style={{ marginRight: '8px' }}></i>  жаңа директория</button>
                            </Col>
                            <Col sm={12} md={3} lg={3} xs={12} >
                                <label htmlFor="drive-upload-input" className='d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                    style={{
                                        margin: '4px',
                                        paddingTop: '6px',
                                        paddingBottom: '10px',
                                        paddingLeft: '16px',
                                        paddingRight: '16px',
                                        borderRadius: '8px',
                                        borderStyle: 'dashed',
                                        background: 'transparent',
                                        borderWidth: '2px',
                                        borderColor: '#42A5F5',
                                        fontSize: '16px',
                                        color: '#1E88E5',
                                        cursor: 'pointer'
                                    }}>файл жүктеу</label>
                                <input type='file'
                                    id='drive-upload-input'
                                    className='drive-upload-input btn btn-outline-primary'
                                    multiple={true}
                                    onChange={(event) => fileUploadHandler(event)}
                                    style={{
                                        display: 'none'
                                    }} />
                            </Col>

                            <Col className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className='d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                    style={{
                                        margin: '4px',
                                        paddingTop: '6px',
                                        paddingBottom: '10px',
                                        paddingLeft: '16px',
                                        paddingRight: '16px',
                                        borderRadius: '8px',
                                        borderStyle: 'solid',
                                        background: 'transparent',
                                        borderWidth: '2px',
                                        borderColor: '#42A5F5',
                                        fontSize: '16px',
                                        color: '#1E88E5',
                                        cursor: 'pointer',
                                        textAlign: 'center'
                                    }}>
                                    <option value="name">Атауы бойынша</option>
                                    <option value="type">Типі бойынша</option>
                                    <option value="date">Құрылған уақыты бойынша</option>
                                </select>
                            </Col>
                            <Col className='col  justify-content-end align-items-end justify-content-xl-end align-items-xl-end'>
                                <Row>
                                    <Col sm={12} md={12} lg={12} xs={12} className=' justify-content-end align-items-center justify-content-xl-center align-items-xl-center'>
                                        <button type='button' className='drive-create-folder-btn btn btn-outline-primary justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                            style={{
                                                margin: '4px',
                                                borderRadius: '8px',
                                                background: 'transparent',
                                                borderWidth: '2px',
                                                borderColor: '#42A5F5',
                                                fontSize: '16px',
                                                color: '#1E88E5'
                                            }} onClick={
                                                () => dispatch(setFileView('plate'))
                                            } >
                                            <i className="fa fa-square" style={{ marginRight: '8px' }}></i>Плитка</button>
                                            <button type='button' className=' text-center  drive-create-folder-btn btn btn-outline-primary  justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                            style={{
                                                margin: '4px',
                                                justifyContent: 'center',
                                                borderRadius: '8px',
                                                background: 'transparent',
                                                borderWidth: '2px',
                                                borderColor: '#42A5F5',
                                                fontSize: '16px',
                                                color: '#1E88E5',
                                            }} onClick={
                                                () => dispatch(setFileView('list'))
                                            }>
                                            <i className="fa fa-bars" style={{ marginRight: '8px'}}></i> Тізім</button>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>






                    </Col>
                </Row>
                <Popup />
                <FileList />
            </Container>
        </div> :
        <Container>
            <Row>
                <div className="drop-area"
                    style={{
                        width: '100%',
                        height: 'calc(100vh - 50px - 40px)',

                        borderStyle: 'dashed',
                        borderColor: '2196F3',
                        borderWidth: '2px'
                    }}
                    onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                    <h4 style={{
                        color: '#2196F3', margin: '40px'
                    }}>Керек файлды осы жерге сүйреңіз</h4>
                </div>
            </Row>

        </Container>



    )
}

export default Disk