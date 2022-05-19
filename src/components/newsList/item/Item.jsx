import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews } from "../../../action/file";

const Item = ({item}) => {
    const dispatch = useDispatch()

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteNews(item._id))
        window.location.reload()
    }
    return (<div style={{
        borderBottomStyle: 'solid',
        borderBottomColor: '#42A5F5',
        borderBottomWidth: '0.5px'
    }}>
        <Row>
            <Col
                className='text-start col-3 col-md-7 col-lg-7 col-xxl-7'
                style={{ fontSize: '18px' }}>
                <Row className="" style={{ marginLeft: '4px' }}>
                    <Col style={{marginTop: '10px'}} className="col-md-9 col-xxl-11 d-flex justify-content-center align-items-center justify-content-sm-start justify-content-lg-start justify-content-xxl-start">
                        <h5>{item.title}</h5>
                    </Col>
                    <Col className="col-md-9 col-xxl-11 d-flex justify-content-center align-items-center justify-content-sm-start justify-content-lg-start justify-content-xxl-start">
                        <h6>{item.date.substring(0, 10)}</h6>
                    </Col>
                    <Col className="col-md-9 col-xxl-11 d-flex justify-content-center align-items-center justify-content-sm-start justify-content-lg-start justify-content-xxl-start">
                        <p>{item.content}</p>
                    </Col>
                </Row>
            </Col>

            <Col
                className='text-end col-5 col-md-3 col-lg-3 col-xxl-3 d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center justify-content-md-start justify-content-lg-start justify-content-xxl-start'
                style={{ fontSize: '18px' }}>
            </Col>
            <Col
                className='text-end col-4 col-md-2 col-xxl-2 d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center'
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
                                    margin: '2px'
                                }} onClick={(e) => deleteClickHandler(e)
                                }> 
                                  <i className="fa fa-trash"></i>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>)
}

export default Item