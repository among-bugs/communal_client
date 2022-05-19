import React, { useEffect } from 'react'
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../action/file"
import User from './user/User'

const UserList = () => {

    const users = useSelector(state => state.users.users).map(user =>
        <User key={user._id} user={user} />
    )

    return (
        <div style={{ marginTop: '20px', padding: '4px' }}>
            <Row>
                <Col md={6} sm={6} lg={6} xs={6}
                    className='text-start'
                    style={{ fontSize: '18px' }}>Қолданушылар</Col>

                <Col md={6} sm={6} lg={6} xs={6}
                    className='text-end'
                    style={{ fontSize: '18px' }}>Опция</Col>
            </Row>
            <hr style={{
                marginBottom: '0px'
            }} />
            {users}
        </div>
    )
}

export default UserList