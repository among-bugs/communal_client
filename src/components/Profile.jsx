import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { deleteAvatar, uploadAvatar } from "../action/user";
import { getUsers, getServices } from "../action/file";
import { API_URL } from "../config";
import Input from "./Input"
import usericon from '../img/usericon.png'
import { profile } from "../action/user"
import { emprofile } from "../action/user"

const Profile = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)

    const users = useSelector(state => state.users)

    const findedServices = useSelector(state => state.services.services)

    useEffect(() => {
        dispatch(getServices())
    }, [])

    console.log(findedServices)

    const [fullname, setFullname] = useState(currentUser.fullname)
    const [phone, setPhone] = useState(currentUser.phone)
    const [region, setRegion] = useState(currentUser.region)
    const [city, setCity] = useState(currentUser.city)
    const [street, setStreet] = useState(currentUser.street)
    const [factura, setFactura] = useState(currentUser.factura)
    const [service, setService] = useState(currentUser.service)

    function clearData() {
        setFullname('')
        setPhone('')
        setRegion('')
        setCity('')
        setStreet('')
        setFactura('')
    }

    const reqInputColClassName = 'col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center'

    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : usericon

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    let isEmployee = false
    let isModerator = false

    isEmployee = (currentUser.status == "employee")

    isModerator = (currentUser.status == "moderator")


    return (
        <div>
            {
                !isEmployee && !isModerator ?
                    <Container>
                        <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>Клиенттің жеке профилі</h4>
                        <Row>
                            <Col sm={4} md={4} lg={4} xs={12} >
                                <Row>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <img style={{
                                            borderStyle: 'solid', borderColor: '#41a4f5', borderWidth: '1px',
                                            padding: '4px'
                                        }} src={avatar} />
                                    </Col>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <Row>
                                            <Col sm={6} md={6} lg={6} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                <label htmlFor="avatar-upload-input" className='d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                                    style={{
                                                        marginTop: '10px',
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
                                                    }}>Аватар жүктеу</label>
                                                <input accept="image/*" style={{
                                                    display: 'none'
                                                }} id='avatar-upload-input' onChange={e => changeHandler(e)} type="file" placeholder="Аватар таңдау" />
                                            </Col>
                                            <Col sm={6} md={6} lg={6} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                <button
                                                    className="d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                                    style={{
                                                        marginTop: '10px',
                                                        paddingTop: '8px',
                                                        paddingBottom: '8px',
                                                        paddingLeft: '16px',
                                                        paddingRight: '16px',
                                                        borderRadius: '8px',
                                                        background: 'transparent',
                                                        borderWidth: '2px',
                                                        borderColor: '#42A5F5',
                                                        borderStyle: 'solid',
                                                        fontSize: '16px',
                                                        color: '#1E88E5',
                                                        transition: '0.4s'
                                                    }} onClick={
                                                        () => dispatch(deleteAvatar())
                                                    }>Аватар өшіру</button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={8} md={8} lg={8} xs={12}>
                                <Row>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <Form className="login-form" style={{
                                            marginTop: '0px', paddingTop: '0px',
                                            borderLeftColor: '#3da2f4',
                                            borderLeftStyle: 'solid',
                                            borderLeftWidth: '1px'
                                        }}>
                                            <Container>
                                                <Row>
                                                    <h5 style={{ textAlign: 'start', marginBottom: '24px' }}>Клиенттің жеке мәліметі</h5>
                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>ТАӘ/ФИО</h6>
                                                            <Col lg={12} md={12} sm={12} className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input req-input-profile flex-fill"
                                                                    value={fullname}
                                                                    setValue={setFullname}
                                                                    type="text"
                                                                    placeholder="Фамилиясы Аты Әкесінің аты" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <p></p>
                                                    <Col
                                                        style={{
                                                            marginBottom: '12px'
                                                        }}
                                                        lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Телефон нөмірі</h6>
                                                            <Col lg={12} md={12} sm={12} className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input flex-fill"
                                                                    value={phone}
                                                                    setValue={setPhone}
                                                                    type="phone"
                                                                    placeholder="Телефон нөміріңізді енгізіңіз" />
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <h5 style={{ textAlign: 'start', marginBottom: '24px' }}>Клиенттің мекен-жайы</h5>

                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Регион</h6>
                                                            <Col className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input flex-fill"
                                                                    value={region}
                                                                    setValue={setRegion}
                                                                    type="text"
                                                                    placeholder="Регионыңызды енгізіңіз" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <p></p>
                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Қала</h6>
                                                            <Col className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input flex-fill"
                                                                    value={city}
                                                                    setValue={setCity}
                                                                    type="text"
                                                                    placeholder="Қаланы енгізіңіз" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <p></p>
                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Көше</h6>
                                                            <Col className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input flex-fill"
                                                                    value={street}
                                                                    setValue={setStreet}
                                                                    type="text"
                                                                    placeholder="Көшені енгізіңіз" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <p></p>
                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Лицевой счет</h6>
                                                            <Col className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input flex-fill"
                                                                    value={factura}
                                                                    setValue={setFactura}
                                                                    type="text"
                                                                    placeholder="Лицевой счетты енгізіңіз" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12} md={12} sm={12} xs={12}
                                                        className={'req-input-col '} >
                                                        <Row>
                                                            <Col lg={6} md={6} sm={6} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                                <Button
                                                                    style={{
                                                                        marginTop: '12px',
                                                                        marginBottom: '32px',
                                                                        padding: '12px',
                                                                        paddingLeft: '20px',
                                                                        paddingRight: '20px',
                                                                        borderRadius: '8px',
                                                                        backgroundColor: '#2196F3',
                                                                        borderColor: '#42A5F5',
                                                                        fontSize: '16px',
                                                                        color: 'white'
                                                                    }}
                                                                    onClick={
                                                                        () => {
                                                                            dispatch(profile(fullname, phone, region, city, street, factura))
                                                                        }
                                                                    }
                                                                    className="login-form-button btn flex-fill shadow-sm">
                                                                    Мәліметтерді сақтау
                                                                </Button>
                                                            </Col>
                                                            <Col lg={6} md={6} sm={6} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                                <Button type="button"
                                                                    style={{
                                                                        marginTop: '12px',
                                                                        marginBottom: '32px',
                                                                        padding: '12px',
                                                                        paddingLeft: '20px',
                                                                        paddingRight: '20px',
                                                                        borderRadius: '8px',
                                                                        backgroundColor: 'transparent',
                                                                        borderColor: '#2196F3',
                                                                        fontSize: '16px',
                                                                        color: '#2196F3'
                                                                    }}
                                                                    onClick={() => clearData()
                                                                    }
                                                                    className="login-form-button btn flex-fill shadow-sm">
                                                                    Мәліметтерді тазарту
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Container>
                        <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>Қызметкердің жеке профилі</h4>
                        <Row>
                            <Col sm={4} md={4} lg={4} xs={12} >
                                <Row>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <img style={{
                                            borderStyle: 'solid', borderColor: '#41a4f5', borderWidth: '1px',
                                            padding: '4px'
                                        }} src={avatar} />
                                    </Col>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <Row>
                                            <Col sm={6} md={6} lg={6} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                <label htmlFor="avatar-upload-input" className='d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                                                    style={{
                                                        marginTop: '10px',
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
                                                    }}>Аватар жүктеу</label>
                                                <input accept="image/*" style={{
                                                    display: 'none'
                                                }} id='avatar-upload-input' onChange={e => changeHandler(e)} type="file" placeholder="Аватар таңдау" />
                                            </Col>
                                            <Col sm={6} md={6} lg={6} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                <button
                                                    className="d-flex d-xl-flex flex-fill justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                                    style={{
                                                        marginTop: '10px',
                                                        paddingTop: '8px',
                                                        paddingBottom: '8px',
                                                        paddingLeft: '16px',
                                                        paddingRight: '16px',
                                                        borderRadius: '8px',
                                                        background: 'transparent',
                                                        borderWidth: '2px',
                                                        borderColor: '#42A5F5',
                                                        borderStyle: 'solid',
                                                        fontSize: '16px',
                                                        color: '#1E88E5',
                                                        transition: '0.4s'
                                                    }} onClick={
                                                        () => dispatch(deleteAvatar())
                                                    }>Аватар өшіру</button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={8} md={8} lg={8} xs={12}>
                                <Row>
                                    <Col sm={12} md={12} lg={12} xs={12}>
                                        <Form className="login-form" style={{
                                            marginTop: '0px', paddingTop: '0px',
                                            borderLeftColor: '#3da2f4',
                                            borderLeftStyle: 'solid',
                                            borderLeftWidth: '1px'
                                        }}>
                                            <Container>
                                                <Row>
                                                    <h5 style={{ textAlign: 'start', marginBottom: '24px' }}>Қызметкердің жеке мәліметі</h5>
                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>ТАӘ/ФИО</h6>
                                                            <Col lg={12} md={12} sm={12} className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input req-input-profile flex-fill"
                                                                    value={fullname}
                                                                    setValue={setFullname}
                                                                    type="text"
                                                                    placeholder="Фамилиясы Аты Әкесінің аты" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <p></p>
                                                    <Col
                                                        style={{
                                                            marginBottom: '12px'
                                                        }}
                                                        lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Телефон нөмірі</h6>
                                                            <Col lg={12} md={12} sm={12} className={'req-input-col ' + reqInputColClassName}>
                                                                <Input className="reg-input flex-fill"
                                                                    value={phone}
                                                                    setValue={setPhone}
                                                                    type="phone"
                                                                    placeholder="Телефон нөміріңізді енгізіңіз" />
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <h5 style={{ textAlign: 'start', marginBottom: '24px' }}>Қызметкердің көрсететін қызметі</h5>

                                                    <Col lg={12} md={12} sm={12}>
                                                        <Row>
                                                            <h6>Қызмет түрі • {service}</h6>
                                                            <Col className={'req-input-col ' + reqInputColClassName}>
                                                                <ButtonGroup className="mb-2">
                                                                    <Row >
                                                                        <Col lg={12} md={12} sm={12} xs={12}
                                                                            className="col d-flex text-start justify-content-center align-items-center"
                                                                            style={{ paddingLeft: '18px', paddingRight: '18px' }}>
                                                                        </Col>
                                                                        {findedServices.map((service, idx) => (
                                                                            <Col
                                                                                lg={6} md={12} sm={12} xs={12} style={{
                                                                                    marginTop: '10px', marginBottom: '10px'
                                                                                }}
                                                                                className="col d-flex d-sm-flex d-md-flex justify-content-center justify-content-sm-center justify-content-md-center align-items-md-center">
                                                                                <ToggleButton className="univercity-card-btn btn flex-fill justify-content-md-center align-items-md-center"
                                                                                    key={idx}
                                                                                    id={`radio-${idx}`}
                                                                                    type="radio"
                                                                                    name="radio"
                                                                                    value={service.name}
                                                                                    checked={service === service._id}
                                                                                    onChange={(e) => setService(e.currentTarget.value)}
                                                                                    style={{
                                                                                        borderStyle: 'solid',
                                                                                        borderRadius: '8px',
                                                                                        borderWidth: '2px',
                                                                                        color: '#2196F3',
                                                                                        borderColor: '#2196F3',
                                                                                        backgroundColor: 'transparent'
                                                                                    }}>
                                                                                    <Row className="justify-content-center">
                                                                                        <Col></Col>
                                                                                        <Col>
                                                                                            <div style={{ marginTop: '8px' }}>
                                                                                                <img  style={{ width: 'auto', height: '200px'}}
                                                                                                  src={service.price}   alt=""/>
                                                                                            </div>
                                                                                        </Col>
                                                                                        
                                                                                        <Col></Col>
                                                                                        <Col sm={12} md={12} lg={12} xs={12}>
                                                                                            <hr />
                                                                                            <p style={{fontSize: '16px', marginTop: '12px'}}>{service.name}</p>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </ToggleButton>
                                                                            </Col>
                                                                        ))}
                                                                    </Row>
                                                                </ButtonGroup>
                                                            </Col>
                                                            <Col sm={12} lg={12} xs={12} md={12}>
                                                                <hr  style={{color: '#2196F3'}}/> 
                                                            </Col>
                                                            
                                                        </Row>
                                                    </Col>
                                                                                   
                                                    <Col lg={12} md={12} sm={12} xs={12}
                                                        className={'req-input-col '} >
                                                        <Row>
                                                            <Col lg={6} md={6} sm={6} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                                <Button
                                                                    style={{
                                                                        marginTop: '12px',
                                                                        marginBottom: '32px',
                                                                        padding: '12px',
                                                                        paddingLeft: '20px',
                                                                        paddingRight: '20px',
                                                                        borderRadius: '8px',
                                                                        backgroundColor: '#2196F3',
                                                                        borderColor: '#42A5F5',
                                                                        fontSize: '16px',
                                                                        color: 'white'
                                                                    }}
                                                                    onClick={
                                                                        () => {
                                                                            dispatch(emprofile(fullname, phone, service))
                                                                        }
                                                                    }
                                                                    className="login-form-button btn flex-fill shadow-sm">
                                                                    Мәліметтерді сақтау
                                                                </Button>
                                                            </Col>
                                                            <Col lg={6} md={6} sm={6} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                                                                <Button type="button"
                                                                    style={{
                                                                        marginTop: '12px',
                                                                        marginBottom: '32px',
                                                                        padding: '12px',
                                                                        paddingLeft: '20px',
                                                                        paddingRight: '20px',
                                                                        borderRadius: '8px',
                                                                        backgroundColor: 'transparent',
                                                                        borderColor: '#2196F3',
                                                                        fontSize: '16px',
                                                                        color: '#2196F3'
                                                                    }}
                                                                    onClick={() => clearData()
                                                                    }
                                                                    className="login-form-button btn flex-fill shadow-sm">
                                                                    Мәліметтерді тазарту
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
            }


        </div>
    )
}

export default Profile