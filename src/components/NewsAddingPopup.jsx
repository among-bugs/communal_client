import React, { useState } from 'react'
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Navbar, Moda } from "react-bootstrap"
import { addingNews } from "../action/file"
import '../components/app.css'

const NewsAddingPopup = () => {

    const newsAddingDisplay = useSelector(state => state.news.newsAddingDisplay)

    const [newsTitle, setNewsTitle] = useState('')

    const [newsContent, setNewsContent] = useState('')

    const [newsDate, setNewsDate] = useState('')

    const dispatch = useDispatch()

    function addnewsHandler() {
        dispatch(addingNews(newsTitle, newsDate, newsContent))
    }

    return (
        <div style={{
            borderColor: 'blue',
            borderWidth: '2px',
            display: newsAddingDisplay
        }}>
            <Row>
                <Col
                    sm={12} md={12} lg={12} xs={12}>
                    <h5 className='text-center' style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        color: '#2196F3'
                    }}>Жаңалықтар қосу</h5>
                </Col>
                <hr />
                <Col
                    sm={12} md={12} lg={12} xs={12} style={{ marginBottom: '10px' }}>
                    <Row>
                        <Col
                            className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                            sm={12} md={12} lg={3} xs={12}>
                            <Input placeholder="Жаңалық тақырыбы"
                                value={newsTitle} setValue={setNewsTitle} />
                        </Col>
                        <Col sm={12} md={12} lg={3} xs={12} className='col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'>
                            <Input type="date" value={newsDate} setValue={setNewsDate} />
                        </Col>
                        <Col
                            className=' col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center'
                            sm={12} md={12} lg={6} xs={12}>
                            <Input placeholder="Жаңалық контенті" value={newsContent} setValue={setNewsContent} />
                        </Col>
                    </Row>
                </Col>
                <hr />
                <Col sm={12} md={12} lg={12} xs={12} style={{ marginBottom: '10px' }}>
                    <Row>
                        <Col sm={12} md={12} lg={5} xs={12}>
                            <h6 className='text-end'>{newsTitle}</h6>
                            <h6 className='text-end'>{newsDate}</h6>
                        </Col>
                        <Col sm={12} md={12} lg={7} xs={12} >
                            <div>
                                <textarea value={newsContent} readOnly={true} rows={10} cols={60}>
                                </textarea>
                            </div>

                        </Col>
                    </Row>
                </Col>
                <hr />
                <Col className='text-center'>
                    <button className='btn btn-primary shadow-sm'
                        onClick={() =>
                            addnewsHandler()
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
                        }}>Жаңалық қосу</button>
                </Col>
            </Row>
        </div>
    )
}

export default NewsAddingPopup