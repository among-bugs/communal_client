import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../action/user"
import { logout } from "../reducers/userReducer";
import { moderators } from '../config';
import permisson_denied from '../img/permission_denied.png'
import Input from "./Input"
import { getNews, getServices, getUsers } from "../action/file";
import NewsList from './newsList/NewsList';
import { setNewsAddingDisplay } from "../reducers/fileReducer"
import { setServiceAddingDisplay } from '../reducers/fileReducer';
import NewsAddingPopup from "../components/NewsAddingPopup"
import ServiceAddingPopup from '../components/ServiceAddingPupop'
import ServiceList from './servicelist/ServiceList';
import UserList from './userslist/UserList'
import usericon from '../img/usericon.png'


const Admin = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    let isAdmin = true

    isAdmin = currentUser.status == "admin"

    return (
        <div>
            {!isAdmin ?
                <div>
                    <Container>
                        <h2 className='text-center' style={{ marginTop: '20px', color: 'rgb(13, 71, 161)' }}>Админ панелі</h2>
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
                                    <h4 className='fw-bold' style={{ color: '#0D47A1' }}>Админ панеліне рұқсат</h4>
                                    <p style={{ color: '#0D47A1' }} >Сіздің профиліңіздің админ панеліне кіруге рұқсаты жоқ. Рұқсат алу үшін қайтадан авторизация бөлімінен админ поштасы мен құпия сөзімен кіре аласыз.</p>
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
                        <h2 className='text-left' style={{ color: 'rgb(13, 71, 161)' }}>Админ панелі</h2>
                        <Row>
                            <Col style={{
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}>
                                {/* <h4 className='text-left' style={{ color: 'rgb(13, 71, 161)' }}>Қызметкерлер тізбегі</h4> */}
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
                                    
                                        <UserList />
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

export default Admin