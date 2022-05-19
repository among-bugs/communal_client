import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../../../action/file";
import { setStatus } from "../../../action/file";
import { API_URL } from "../../../config";
import usericon from '../../../img/usericon.png'

const User = ({ user }) => {
    const dispatch = useDispatch()
    const status = [
        {
            code: 'user',
            name: 'Қолданушы',
            backgroundColor: '',
            borderColor: '',
            color: ''
        },
        {
            code: 'employee',
            name: 'Қызметкер',
            backgroundColor: 'lime',
            borderColor: 'green',
            color: 'black'
        },
        {
            code: 'moderator',
            name: 'Модератор',
            backgroundColor: 'yellow',
            borderColor: 'orange',
            color: 'black'
        },
        {
            code: 'admin',
            name: 'Администратор',
            backgroundColor: 'aqua',
            borderColor: 'blue',
            color: 'black'
        }
    ]

    const avatar = user.avatar ? `${API_URL + user.avatar}` : usericon

    function getStatus(attribute) {
        let current
        status.forEach((item, i) => {
            if (status[i].code == user.status) {
                current = status[i][attribute]
            }
            if (user.status == 'Статус белгіленбеген!') {
                current = user.status
            }
        })
        return current
    }

    let currentUserStatus = {
        name: getStatus('name'),
        color: getStatus('color'),
        borderColor: getStatus('borderColor'),
        backgroundColor: getStatus('backgroundColor')
    }

    console.log(currentUserStatus)

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteUsers(user._id))
        window.location.reload()
    }

    const allPhoneCodes = [
        '8702', '8707', '8708', '8777', '8701', '8778', '8775'
    ]

    const phoneNumberNull = 'Көрсетілмеген'

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
                        <Col sm={2} md={2} lg={2} xs={12}>
                            <img className="d-flex "
                                style={{
                                    margin: '8px',
                                    width: '100px',
                                    height: '100px'
                                }} src={avatar} alt="asd" />
                        </Col>
                        <Col sm={10} md={10} lg={10} xs={12}>
                            <p className="text-start" style={{ marginTop: '14px' }}> {user.fullname} &nbsp;
                                <span style={{
                                    backgroundColor: currentUserStatus.backgroundColor,
                                    borderRadius: '10px',
                                    borderStyle: 'solid',
                                    borderColor: currentUserStatus.borderColor,
                                    color: currentUserStatus.color,
                                    borderWidth: '2px',
                                    padding: '4px',
                                    paddingLeft: '8px',
                                    paddingRight: '8px',
                                    fontSize: '12px',
                                    width: '80px'
                                }}>
                                    {currentUserStatus.name}
                                </span>
                            </p>
                            <h6>Телефон нөмірі: &nbsp;

                                <i style={{ color: '#1253AC' }} className="fa fa-phone"></i>

                                &nbsp; {user.phone}</h6>
                            {
                                user.status == 'user' ?
                                    <h6></h6>
                                    :
                                    <h6>
                                        Көрсететін қызметі: &nbsp;<i style={{ color: '#1253AC' }} className="fa fa-book"></i>
                                    &nbsp;{user.service}</h6>
                            }
                        </Col>
                    </Row>
                </Col>

                <Col
                    className='text-end d-flex d-sm-flex justify-content-end align-items-center justify-content-sm-end align-items-sm-center'
                    style={{ fontSize: '18px' }}>
                    <Row>
                        <Col 
                            className="d-flex d-sm-flex justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end justify-content-lg-end justify-content-xxl-end">
                            {/* <Row>
                                <Col sm={12} md={12} lg={12} xs={12}> */}
                                    <DropdownButton variant="outline-primary" title="Статусты өзгерту" >
                                        <Dropdown.Item  onClick={() => {
                                            dispatch(setStatus(user.fullname, 'admin'))
                                            window.location.reload()
                                        }} >Администратор</Dropdown.Item>
                                        <Dropdown.Item  onClick={() => {
                                            dispatch(setStatus(user.fullname, 'moderator'))
                                            window.location.reload()
                                        }} >Модератор</Dropdown.Item>
                                        <Dropdown.Item  onClick={() => {
                                            dispatch(setStatus(user.fullname, 'employee'))
                                            window.location.reload()
                                        }} >Қызметкер</Dropdown.Item>
                                        <Dropdown.Item  onClick={() => {
                                            dispatch(setStatus(user.fullname, 'user'))
                                            window.location.reload()
                                        }} >Қолданушы</Dropdown.Item>
                                    </DropdownButton>

                                {/* </Col>
                            </Row> */}
                        </Col>
                        <Col 
                            className="d-flex d-sm-flex justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end justify-content-lg-end justify-content-xxl-end">
                            <Row>
                                <Col sm={12} md={12} lg={6} xs={12}>
                                    <button className="btn btn-primary"

                                        onClick={(e) => deleteClickHandler(e)
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

export default User