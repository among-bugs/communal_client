import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../action/file";

const News = () => {

    const dispatch = useDispatch()

    const news = useSelector(state => state.news.news)
    
    useEffect(() => {
        dispatch(getNews())
    }, [])


    return (
        <div>
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
                                    {/* <img src={newspaper} style={{ backgroundColor: '#90CAF9' }} alt={'../img/newspaper.png'} /> */}
                                    <h5 className='text-start' style={{ marginTop: '12px' }}>{n.title}</h5>
                                    <p className='text-muted'>{n.date.substring(0, 10)}</p>
                                    <p>{n.content}</p>
                                </div>
                            </Col>
                        )

                        )
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

export default News