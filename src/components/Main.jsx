import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import '../components/app.css'
import nancy from '../img/nancy.jpg'
import woman from '../img/woman.png'
import university from '../img/university.png'
import science from '../img/science.png'
import science2 from '../img/science2.png'
import social from '../img/social.png'
import newspaper from '../img/newspaper.png'
import top10 from '../img/top10.png'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { getUsers } from '../action/file'
import { getNews } from '../action/file';
import { API_URL } from "../config";
import usericon from '../img/usericon.png'

const MainPage = () => {


    const dispatch = useDispatch()

    const news = useSelector(state => state.news.news)


    useEffect(() => {
        dispatch(getNews())
        dispatch(getUsers())
    }, [])


    const topemp = useSelector(state => state.topemp.topemp)

    console.log(topemp.fullname)

    let products = []
    let services = []

    const currentNews = useSelector(state => state.user.currentUser)

    useSelector(state => state.users.users).map((user, idx) => {
        if (user.status == 'employee') {
            products.push({
                id: user._id,
                name: <h6 className='d-flex justify-content-start'>{user.fullname}</h6>,
                service: <Row>
                    <Col sm={12} md={12} lg={12} className='d-flex justify-content-center'>
                        {user.service}
                    </Col>
                </Row>
            })
        }
    })

    // services.push(...products)

    

    // services.map((user, idx) => {
    //     if (user.status == 'employee') {
    //         services.push({
    //             id: idx + 1,
    //             name: user.fullname,
    //             service: user.service
    //         })
    //     }
    // })


    const columns = [{
        dataField: 'id',
        text: 'Қызметкер ID-ы'
    }, {
        dataField: 'name',
        text: 'Қызметкер аты-жөні'
    }, {
        dataField: 'service',
        text: 'Көрсетілген қызмет түрі'
    }];

    let cssStylesTo = {
        'top-one-card': {
            'profile': {
                'class': 'col-3 col-lg-3 col-xl-4 d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center',
                'style': 'padding: 0px;background: transparent;border-bottom-left-radius: 8px;border-top-left-radius: 8px;border-right-width: 1px;border-left: 4px solid var(--bs-blue) ;'
            },
            'data': {
                'class': 'col-6 col-lg-7 col-xl-5 d-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center align-items-xl-center',
                'style': 'border-top-right-radius: 8px;border-bottom-right-radius: 8px;',
                'content': {
                    row: {
                        'class': 'row d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center',
                        'col-1': {
                            'class': 'col-xl-12 d-flex d-lg-flex d-xl-flex justify-content-start align-items-lg-center align-items-xl-center',
                            'h6': {
                                'class': 'd-flex justify-content-center align-items-center'
                            }
                        },
                        'col-2': {
                            'class': 'col-xl-12 d-flex d-lg-flex justify-content-start align-items-lg-center',
                            'paragraph': {
                                'class': 'd-flex d-xl-flex justify-content-center align-items-center'
                            }
                        },
                        'col-3': {
                            'class': 'col-xl-12',
                            'row': {
                                'col-1': {
                                    class: 'col-9 col-sm-6 col-md-5 col-lg-9 col-xl-8 col-xxl-7 d-flex d-lg-flex d-xl-flex justify-content-center',
                                    icon: {
                                        'class': 'fas fa-star fs-6 text-warning'
                                    }
                                },
                                'col-2': {
                                    class: 'col-3 col-sm-6 col-md-7 col-lg-3 col-xl-3 d-lg-flex d-xl-flex justify-content-lg-center justify-content-xl-start align-items-xl-center'
                                }
                            }
                        }
                    }
                }
            },
            'label': {
                'class': 'col-3 col-lg-2 col-xl-3 d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center',
                'style': 'padding: 0px;background: transparent;'

            }
        }
    }

    return (
        <div>
            <div className='main-page d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center'>
                <Container style={{ height: '200px' }} className="container d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                    <Row className='row d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center'>
                        <Col >
                            <br />
                            <h1>
                                Коммуналдық қызмет <hr />
                                <p style={{ fontSize: '16px' }}>Қала тұрғындарының мекен-жайлары бойынша коммуналдық қызмет көрсету</p>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className='justify-content-center row row-cols-1 row-cols-md-2 mx-auto'>
                    <Col className='col text-center shadow-lg' xs={12} sm={12} md={6} lg={6}
                        style={{
                            backgroundColor: '#f7f7f7', borderRadius: '22px',
                            marginTop: '32px', marginBottom: '20px'
                        }} >
                        <img src='https://www.pngitem.com/pimgs/m/358-3589429_bundle-module-creator-by-city-isometric-vector-png.png'
                            style={{ height: 'auto', width: 'auto' }}
                            className='rounded img-fluid ' alt="" />
                    </Col>
                    <Col className='col d-md-flex align-items-md-right align-items-lg-center'
                        xs={12} sm={12} md={6} lg={6} >
                        <div className='' style={{ margin: '8px' }}>
                            <h2 className='fw-bold'>Қала бойынша</h2>
                            <p className='text-muted'>Біздің мекененің тұтынушыларға көрсететін қызмет масштабы қала бойынша жүреді. Кез-келген клиент жүйеге тіркеліп өзінің мәліметін енгізіп сервис сұрай алады</p>
                            <button className='btn btn-primary shadow-sm' style={{
                                marginTop: '16px',
                                marginBottom: '10px',
                                padding: '12px',
                                borderRadius: '8px',
                                background: '#42a5f5',
                                borderColor: 'transparent',
                                fontSize: '16px',
                                color: 'white',
                                transition: '0.4s'
                            }}>Жүйеге тіркелу</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div style={{ backgroundColor: '#BBDEFB' }}>
                <Container>
                    <Row className='justify-content-center row row-cols-1 row-cols-md-2 mx-auto'>
                        <Col className='col d-flex d-lg-flex justify-content-center align-items-center order-md-last justify-content-lg-center align-items-lg-center'
                            xs={12} sm={12} md={6} lg={6}
                            style={{
                                backgroundColor: '#f7f7f7', borderRadius: '22px',
                                marginTop: '20px', marginBottom: '20px'
                            }} >
                            <img src={'https://www.kindpng.com/picc/m/710-7107832_server-illustration-web-hosting-royalty-free-hd-png.png'}
                                style={{ height: 'auto', width: 'auto' }}
                                className='rounded img-fluid ' alt="" />
                        </Col>
                        <Col className='col d-md-flex align-items-md-end align-items-lg-center'
                            xs={12} sm={12} md={6} lg={6} >
                            <div className='' style={{ margin: '8px' }}>
                                <h2 className='fw-bold' style={{ color: '#0D47A1' }}>Үлкен деректер жинағы</h2>
                                <p style={{ color: '#0D47A1' }} >Біздің мекемеміздің онлайн коммуналдық сервис көрсететін веб-қосымшамыз күн сайын жаңартылудан өтеді. Клиенттердің мәліметі дерекқорымызда қауіпсіз деңгейде сақталады.</p>
                                <a className='btn btn-primary shadow-sm'
                                    type='link' href='/profile'
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
                                    }}>Профилге көшу</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className='justify-content-center row row-cols-1 row-cols-md-2 mx-auto'>
                    <Col className='col text-center shadow-lg' xs={12} sm={12} md={6} lg={6}
                        style={{
                            backgroundColor: '#90CAF9', borderRadius: '22px',
                            marginTop: '20px', marginBottom: '20px'
                        }} >
                        <img src={social}
                            style={{ height: 'auto', width: 'auto' }}
                            className='rounded img-fluid' alt="" />
                    </Col>
                    <Col className='col d-md-flex align-items-md-end align-items-lg-center'
                        xs={12} sm={12} md={6} lg={6} >
                        <div className='' style={{ margin: '8px' }}>
                            <h2 className='fw-bold'>Сервис жалдау</h2>
                            <p className='text-muted'>Біздің мекемеміздің қызметкерлері тұтынушыларға күн сайын сервис көрсетуде. Сіз де сервис тұтынғыңыз келсе сервис бөліміне көшіңіз</p>
                            <a className='btn btn-primary shadow-sm'
                                type='link'
                                href='/service'
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
                                }}>Сервиске көшу</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            {/*          TOP service */}
            <Container>
                <Row>
                    <h2 style={{ color: '#0D47A1', marginBottom: '20px' }}>Көрсетілген сервистер  &nbsp;
                        <img src='https://www.iconpacks.net/icons/1/free-best-icon-1374-thumb.png' alt="" style={{ height: 'auto', width: '60px' }}
                            className='rounded img-fluid' />
                    </h2>
                    <Col sm={12} lg={12} xs={12} md={12} xxs={12} xlg={12}>
                        <div className='shadow' style={{ borderRadius: '12px' }}>
                            <BootstrapTable responsive keyField='id' data={products} columns={columns} />
                        </div>

                    </Col>
                </Row>
            </Container>

            {/*         NEWS      */}
            <hr />
            <Container>
                <Row>
                    <h2 style={{ color: '#0D47A1', marginBottom: '20px' }}>Жаңалықтар&nbsp;
                        <img src='https://icon-library.com/images/45_newspaper-news-press-paper-512_100942.png'
                            alt="" style={{ height: 'auto', width: '60px' }}
                            className='rounded img-fluid' /></h2>
                    {
                        news.map((n, i) => (
                            <Col md={4} lg={4} sm={4} xs={12} xss={12} key={i}>
                                <div className='news-card shadow' style={{
                                    padding: '12px',
                                    marginTop: '20px',
                                    borderRadius: '12px',
                                    borderWidth: '1px',
                                    paddingRight: '18px',
                                    paddingLeft: '18px',
                                    borderStyle: 'solid',
                                    borderColor: '#2196F3'
                                }}>
                                    <h5 className='text-start' style={{ marginTop: '12px' }}>{n.title}</h5>
                                    <p className='text-muted'>{n.date.substring(0, 10)}</p>
                                    <p>{n.content}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <div className='main-page-footer d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center'>
                <Container style={{ paddingTop: '20px' }}>
                    <Row>
                        <Col md={8} lg={8} sm={8}>
                            <h6>ЖШС "Коммунальник" мекемесіне арналған веб-қосымша</h6>
                        </Col>
                        <Col md={4} lg={4} sm={4} className='text-end'>
                            <h6>Орындаған: </h6></Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default MainPage