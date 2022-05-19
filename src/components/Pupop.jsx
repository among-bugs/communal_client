import React, { useState } from 'react'
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDisplay } from "../reducers/fileReducer";
import { Container, Row, Col, Navbar, Moda } from "react-bootstrap"
import { createDir } from "../action/file";
import '../components/app.css'

const Pupop = () => {

    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
    }

    return (
            <div onClick={() => dispatch(setPopupDisplay('none'))} style={{
                borderColor: 'blue',
                borderWidth: '2px',
                display: popupDisplay
            }}>
                
                <Container >
                    <div onClick={(event => event.stopPropagation())}  style={{
                        marginTop: '40px',
                        marginBottom: '40px',
                         background: '#E3F2FD',
                         padding: '40px',
                         borderRadius: '12px',
                         borderStyle: 'solid',
                         borderColor: '#42A5F5',
                        borderWidth: '2px'
                    }}>
                        <Row>
                            <Col sm={8} md={8} xs={8} lg={8} 
                            className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex ">
                                <h5 style={{color: '#1976D2'}}> Жаңа директория құру</h5>
                               </Col>
                            <Col sm={4} md={4} xs={4} lg={4} 
                            className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end align-items-md-end justify-end-lg-center align-items-lg-end justify-content-xl-end align-items-xl-end justify-content-xxl-end align-items-xxl-end">
                                <button className='btn btn-light' onClick={() => dispatch(setPopupDisplay('none'))} style={{color: '#1976D2'}}>Жабу</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} xs={12} lg={12}
                            className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center">
                                <Input className="reg-input flex-fill shadow-lg"  
                                inputStyle={{
                                    borderRadius: '12px',
                                    borderStyle: 'solid',
                                    borderColor: '#42A5F5',
                                    borderWidth: '2px'
                                }}
                                type="text" placeholder='Директория атауы' value={dirName} setValue={setDirName} />
                            </Col >
                            <Col sm={12} md={12} xs={12} lg={12} 
                            className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end align-items-md-end justify-content-lg-end align-items-lg-end justify-content-xl-end align-items-xl-end justify-content-xxl-end align-items-xxl-end">
                                <button className='btn btn-primary' style={{
                                    marginTop: '12px',
                                    marginBottom: '12px',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    backgroundColor: '#2196F3',
                                    borderColor: '#42A5F5',
                                    fontSize: '16px',
                                    color: 'white'
                                }} onClick={() => createHandler()}>Орындау</button>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
    )
}

export default Pupop