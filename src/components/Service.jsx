import React, { useEffect } from 'react'
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getServices } from '../action/file'
import cleaningimg from '../img/people-putting-rubbish-in-trash-bins-cartoon-man-vector-37223631-removebg-preview.png'
const Service = () => {

    const dispatch = useDispatch()

    

    useEffect(() => {
        dispatch(getServices())
    }, [])
    const services = useSelector(state => state.services.services)

    console.log(services)

    return (
        <div>
            <Container>
                <Row>
                    <h2 style={{ color: '#0D47A1', marginBottom: '20px', marginTop: '20px' }}>Көрсетілетін қызметтер&nbsp;
                        <img src='https://bella-systech.kz/wp-content/uploads/2018/10/customer-service.png'
                            alt="" style={{ height: 'auto', width: '60px' }}
                            className='rounded img-fluid' /></h2>
                    {
                        services.map((service, idx) => 
                            <Col md={4} lg={4} sm={4} xs={12} xss={12} key={idx}>
                                <div className='news-card shadow-lg text-center' style={{
                                    padding: '12px',
                                    marginTop: '20px',
                                    borderRadius: '12px',
                                    borderWidth: '1px',
                                    paddingRight: '18px',
                                    paddingLeft: '18px',
                                    borderStyle: 'solid',
                                    borderColor: '#2196F3'
                                }}>
                                    <img src={service.price} style={{ backgroundColor: 'white', width: 'auto', height: '250px' }} alt={'../img/newspaper.png'} />
                                    <hr />
                                    <h5 className='text-start' style={{ marginTop: '12px' }}>{service.name}</h5>
                                    <p className='text-start text-muted'>Қызмет статусы&nbsp; <i className='fa fa-circle' style={{ color: 'lime' }}></i></p>
                                    <p className='text-start'>Қызмет бағасы тариф бойынша: {service.image}</p>
                                    <div className='text-end'>
                                        <ButtonGroup>
                                            <a href={'mailto:' + service.email} style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', color: 'white' }} className='btn btn-warning'>Пошта&nbsp; <i className='fa fa-envelope' style={{ color: 'white' }}></i></a>
                                            <a href={'tel:' + service.phone}  className='btn btn-primary'>Телефон&nbsp; <i className='fa fa-phone' style={{ color: 'white' }}></i></a>
                                            <a href={"https://api.whatsapp.com/send?phone=" + service.phone + "&amp;text=Cәлеметсіз бе, осы мекемеден аула тазалау қызметін тұтынғым келеді..."} style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }} className='btn btn-success'>Whatsapp&nbsp; <i className='fa fa-whatsapp' style={{ color: 'white' }}></i></a>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Col>
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

export default Service