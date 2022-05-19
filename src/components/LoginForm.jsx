import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from "../action/user"
import Input from "./Input"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const reqInputColClassName = 'col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center'
    return (
        <div>
            <section className="d-xxl-flex justify-content-xxl-center align-items-xxl-center">
                <Container>
                    <Row className="justify-content-center" style={{ marginTop: '40px', marginLeft: '-40px', marginRight: '-40px' }}>
                        <Col className="text-center" sm={12} md={10} xs={10} xss={12} lg={5}>
                            <Row className="girl my-form shadow">
                                <Col lg={12} className="form-column" style={{ backgroundColor: '#E3F2FD' }}>
                                    <Form className="login-form">
                                        <Container>
                                            <Row>
                                                <Col lg={12} md={12} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12} xs={12} xss={12} className={reqInputColClassName}>
                                                            <Button
                                                                variant="white"
                                                                href="/login"
                                                                style={{
                                                                    marginTop: '16px',
                                                                    marginBottom: '10px',
                                                                    padding: '12px',
                                                                    borderRadius: '8px',
                                                                    background: '#42A5F5',
                                                                    borderColor: 'transparent',
                                                                    fontSize: '16px',
                                                                    color: 'white'
                                                                }}
                                                                className="login-form-button btn flex-fill shadow-sm">
                                                                <i className="fa fa-user"></i>  Кіру
                                                            </Button>
                                                        </Col>
                                                        <Col lg={6} sm={12} md={6} xs={12} xss={12} className={reqInputColClassName}>
                                                            <Button
                                                                href="/registration"
                                                                variant="primary"
                                                                style={{
                                                                    marginTop: '16px',
                                                                    marginBottom: '10px',
                                                                    padding: '12px',
                                                                    borderRadius: '8px',
                                                                    background: 'transparent',
                                                                    borderColor: 'transparent',
                                                                    fontSize: '16px',
                                                                    color: '#42A5F5'
                                                                }}
                                                                className="login-form-button btn flex-fill">
                                                                <i className="fa fa-user-plus"></i>  Регистрация
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className={'req-input-col ' + reqInputColClassName}
                                                    lg={12} md={12} sm={12}>
                                                    <Input className="reg-input flex-fill"
                                                        value={email}
                                                        setValue={setEmail}
                                                        type="email"
                                                        placeholder="&#xf0e0;&nbsp; Пошта" /></Col>
                                                <Col className={'req-input-col ' + reqInputColClassName}
                                                    lg={12} md={12} sm={12}>
                                                    <Input className="reg-input flex-fill"
                                                        value={password}
                                                        setValue={setPassword}
                                                        type="password"
                                                        placeholder="&#xf14a;&nbsp; Құпия сөз" /> </Col>
                                                <Col lg={12} md={12} sm={12} xs={12}
                                                    className={'req-input-col ' + reqInputColClassName} >
                                                    <Button
                                                        onClick={() => dispatch(login(email, password))
                                                        }
                                                        style={{
                                                            marginTop: '12px',
                                                            marginBottom: '32px',
                                                            padding: '12px',
                                                            borderRadius: '8px',
                                                            backgroundColor: '#2196F3',
                                                            borderColor: '#42A5F5',
                                                            fontSize: '16px',
                                                            color: 'white'
                                                        }}
                                                        className="login-form-button btn flex-fill shadow-sm">
                                                        <i className="fa fa-user"></i>  Жүйеге кіру
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </Col>
                            </Row></Col>
                    </Row>

                </Container>
            </section>

        </div>
    )
}
export default LoginForm