import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteServices } from "../../../action/file";

const Service = ({service}) => {

    const dispatch = useDispatch()

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteServices(service._id))
        window.location.reload()
    }

    return (
        <div style={{
            borderBottomStyle: 'solid',
            borderBottomColor: '#42A5F5',
            borderBottomWidth: '0.5px'
        }}>
            <Row>
                <Col xs={12} sm={8} md={8} lg={8}
                    className='text-start'
                    style={{ fontSize: '18px' }}>
                    <Row className="" style={{ marginLeft: '4px' }}>
                        <Col sm={8} md={8} lg={8} xs={12}>
                            <h5 className="text-start" style={{marginTop: '14px'}}>{service.name}</h5>
                            <h6>{service.phone}</h6>
                            <p>{service.email}</p>
                            <p>{service.image}</p>
                        </Col>
                        <Col sm={4} md={4} lg={4} xs={12}>
                            <img src={service.price} style={{height: '160px', width: 'auto'}} alt="" />
                        </Col>
                    </Row>
                </Col>
    
                <Col 
                    className='text-end d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center justify-content-md-start justify-content-lg-start justify-content-xxl-start'
                    style={{ fontSize: '18px' }}>
                    
                </Col>
                <Col 
                    className='text-end d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center'
                    style={{ fontSize: '18px' }}>
                    <Row>
                        <Col sm={6} md={8} lg={9} xs={6}
                            className="d-flex d-sm-flex justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end justify-content-lg-end justify-content-xxl-end">
                            <Row>
                                <Col sm={12} md={12} lg={12} xs={12}>
                                    <button className="btn btn-light" style={{
                                        borderStyle: 'solid',
                                        borderColor: '#2196F3',
                                        borderWidth: '1px',
                                        margin: '2px',
                                        backgroundColor: '#2196F3',
                                        color: 'white'
                                    }} onClick={(e) => deleteClickHandler(e)
                                    }> 
                                      <i className="fa fa-trash">&nbsp;Өшіру</i> 
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Service