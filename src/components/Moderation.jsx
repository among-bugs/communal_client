import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../action/user"
import { logout } from "../reducers/userReducer";
import { moderators } from '../config';
import permisson_denied from '../img/permission_denied.png'
import Input from "./Input"
import { getNews, getServices } from "../action/file";
import NewsList from './newsList/NewsList';
import { setNewsAddingDisplay } from "../reducers/fileReducer"
import { setServiceAddingDisplay } from '../reducers/fileReducer';
import NewsAddingPopup from "../components/NewsAddingPopup"
import ServiceAddingPopup from '../components/ServiceAddingPupop'
import ServiceList from './servicelist/ServiceList';

const Moderation = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)


    // let news = useSelector(state => state.news)

    useEffect(() => {
        dispatch(getNews())
        dispatch(getServices())
    }, [])


    function showNewsPopupHandler() {
        dispatch(setNewsAddingDisplay('flex'))
    }

    function showServicesPopupHandler() {
        dispatch(setServiceAddingDisplay('flex'))
    }

    let isModerator = true

    isModerator = currentUser.status == "moderator"

    return (
        <div>
            {!isModerator ?
                <div>
                    <Container>
                        <h2 className='text-center' style={{ marginTop: '20px', color: 'rgb(13, 71, 161)' }}>Модератор панелі</h2>
                        <Row className='justify-content-center row row-cols-1 row-cols-md-2 mx-auto'>
                            <Col className='col d-flex d-lg-flex justify-content-center align-items-center order-md-last justify-content-lg-center align-items-lg-center'
                                xs={12} sm={12} md={6} lg={6}
                                style={{
                                    backgroundColor: '#BBDEFB', borderRadius: '22px',
                                    marginTop: '20px', marginBottom: '20px'
                                }} >
                                <img src={permisson_denied}
                                    style={{ height: 'auto', width: 'auto' }}
                                    className='rounded img-fluid ' alt="" />
                            </Col>
                            <Col className='col d-md-flex align-items-md-end align-items-lg-center'
                                xs={12} sm={12} md={6} lg={6} >
                                <div className='' style={{ margin: '8px' }}>
                                    <h4 className='fw-bold' style={{ color: '#0D47A1' }}>Модератор панеліне рұқсат</h4>
                                    <p style={{ color: '#0D47A1' }} >Сіздің профиліңіздің модератор панеліне кіруге рұқсаты жоқ. Рұқсат алу үшін қайтадан авторизация бөлімінен модератор поштасы мен құпия сөзімен кіре аласыз.</p>
                                    <a className='btn btn-primary shadow-sm'
                                        onClick={() => dispatch(logout())}
                                        type='link' href='/login'
                                        style={{
                                            marginTop: '16px',
                                            marginBottom: '10px',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            background: '#42a5f5',
                                            borderColor: 'transparent',
                                            fontSize: '16px',
                                            color: 'white',
                                            transition: '0.4s'
                                        }}>Авторизацияға өту</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                :
                <div>
                    <Container style={{
                        marginTop: '20px'
                    }}>
                        <h2 className='text-left' style={{ color: 'rgb(13, 71, 161)' }}>Модератор панелі</h2>
                        <Row>
                            <Col sm={12} md={12} lg={12} xs={12} style={{
                                marginTop: '10px'
                            }}>
                                <ButtonGroup>
                                    <button type='button' className='drive-create-folder-btn btn btn-outline-primary d-flex  justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
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
                                        }} onClick={() => showNewsPopupHandler()}>
                                        {/* <i className="fa fa-news" style={{ marginRight: '8px' }}></i> */}
                                        жаңалық қосу</button>

                                    <button type='button' className='drive-create-folder-btn btn btn-outline-primary d-flex  justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
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
                                        }} onClick={() => showServicesPopupHandler()}>
                                        {/* <i className="fa fa-news" style={{ marginRight: '8px' }}></i> */}
                                        сервис қосу</button>
                                </ButtonGroup>
                            </Col>

                            <Col style={{
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}>
                                <h4 className='text-left' style={{ color: 'rgb(13, 71, 161)' }}>Жаңалықтар тізбегі</h4>
                                <Row>
                                    <div className='shadow' style={{
                                        padding: '12px',
                                        marginTop: '20px',
                                        borderRadius: '12px',
                                        borderWidth: '1px',
                                        paddingRight: '18px',
                                        paddingLeft: '18px',
                                        borderStyle: 'solid',
                                        borderColor: '#2196F3'
                                    }}>
                                        <NewsAddingPopup />
                                        <NewsList />
                                        <br />
                                    </div>
                                </Row>
                            </Col>

                            <Col sm={12} xs={12} md={12} lg={12} style={{
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}>
                                <h4 className='text-left' style={{ color: 'rgb(13, 71, 161)' }}>Сервистер тізбегі</h4>
                                <Row>
                                    <div className='shadow' style={{
                                        padding: '12px',
                                        marginTop: '20px',
                                        borderRadius: '12px',
                                        borderWidth: '1px',
                                        paddingRight: '18px',
                                        paddingLeft: '18px',
                                        borderStyle: 'solid',
                                        borderColor: '#2196F3'
                                    }}>
                                        <ServiceAddingPopup />
                                        <ServiceList />
                                        <br />
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </div>

    )
}

export default Moderation