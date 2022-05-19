import React, { useEffect } from 'react'
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../action/file"
import Service from './service/Service'

const ServiceList = () => {


    const services = useSelector(state => state.services.services).map(service => 
            <Service key={service._id} service={service} />
    )

    return (
        <div style={{ marginTop: '20px', padding: '4px' }}>
            <Row>
                <Col md={6} sm={6} lg={6} xs={6}
                    className='text-start'
                    style={{ fontSize: '18px' }}>Сервис</Col>

                <Col md={6} sm={6} lg={6} xs={6}
                    className='text-end'
                    style={{ fontSize: '18px' }}>Опция</Col>
            </Row>
            <hr style={{
                marginBottom: '0px'
            }} />
            {services}
        </div>
    )
}

export default ServiceList