import React, { useState } from 'react'
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Navbar, Moda } from "react-bootstrap"
import { addingServices } from "../action/file"
import '../components/app.css'

const ServiceAddingPopup = () => {

    const serviceAddingDisplay = useSelector(state => state.news.serviceAddingDisplay)

    const [serviceName, setServiceName] = useState('')

    const [servicePhone, setServicePhone] = useState('')

    const [serviceEmail, setServiceEmail] = useState('')

    const [servicePrice, setServicePrice] = useState('')

    const [serviceImage, setServiceImage] = useState('')

    const dispatch = useDispatch()

    function addserviceHandler() {
        dispatch(addingServices(serviceName, servicePhone, serviceEmail, serviceImage, servicePrice))
    }

    return (
        <div style={{
            borderColor: 'blue',
            borderWidth: '2px',
            display: serviceAddingDisplay
        }}>
            <Row>
                <Col
                    sm={12} md={12} lg={12} xs={12}>
                    <h5 className='text-center' style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        color: '#2196F3'
                    }}>Сервистер қосу</h5>
                </Col>
                <hr />
                <Col
                    sm={12} md={12} lg={12} xs={12} style={{ marginBottom: '10px' }}>
                    <Row>
                        <Col
                            className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                            sm={12} md={12} lg={3} xs={12}>
                            <Input placeholder="Сервис атауы"
                                value={serviceName} setValue={setServiceName} />
                        </Col>
                        <Col sm={12} md={12} lg={3} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                            <Input 
                                placeholder="Қызмет телефоны" 
                                value={servicePhone} 
                                setValue={setServicePhone} />
                        </Col>
                        <Col
                            className=' col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                            sm={12} md={12} lg={3} xs={12}>
                            <Input placeholder="Қызмет поштасы" value={serviceEmail} setValue={setServiceEmail} />
                        </Col>
                        <Col
                            className=' col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                            sm={12} md={12} lg={3} xs={12}>
                            <Input placeholder="Сервис бағасы" value={servicePrice} setValue={setServicePrice} />
                        </Col>
                        <Col
                            className=' col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                            sm={12} md={12} lg={3} xs={12}>
                            <Input placeholder="Бейне сілтемесі" value={serviceImage} setValue={setServiceImage} />
                        </Col>
                    </Row>
                </Col>
                <hr />
                <Col sm={12} md={12} lg={12} xs={12} style={{ marginBottom: '10px' }}>
                    <Row>
                        <Col sm={12} md={12} lg={6} xs={12}>
                            <h6 className='text-end'>{serviceName}</h6>
                            <h6 className='text-end'>{servicePhone}</h6>
                            <h6 className='text-end'>{serviceEmail}</h6>
                        </Col>
                        <Col sm={12} md={12} lg={6} xs={12} >
                            <div>
                                <img src={serviceImage} style={{
                                    width: '300px', height: 'auto'
                                }} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <hr />
                <Col className='text-center'>
                    <button className='btn btn-primary shadow-sm'
                        onClick={() =>
                            addserviceHandler()
                        }
                        style={{
                            marginBottom: '10px',
                            padding: '12px',
                            borderRadius: '8px',
                            background: '#42a5f5',
                            borderColor: 'transparent',
                            fontSize: '16px',
                            color: 'white',
                            transition: '0.4s'
                        }}>Сервис қосу</button>
                </Col>
            </Row>
        </div>
    )
}

export default ServiceAddingPopup