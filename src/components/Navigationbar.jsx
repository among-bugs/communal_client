import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";
import usericon from '../img/usericon.png'
import { API_URL } from "../config";

const NavigationBar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch()

    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : usericon


    return (
        <Navbar className="navbar shadow" collapseOnSelect sticky="top" expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand href="/main" style={{ fontSize: '18px', fontWeight: 'bold', color: '#E3F2FD' }}>
                    Негізгі бет
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/profile" style={{ fontSize: '18px', color: '#E3F2FD' }}>
                            Профиль
                        </Nav.Link>
                        <Nav.Link href="/service" style={{ fontSize: '18px', color: '#E3F2FD' }}>
                            Сервис
                        </Nav.Link> 
                        <Nav.Link href="/news" style={{ fontSize: '18px', color: '#E3F2FD' }}>
                            Жаңалықтар
                        </Nav.Link>
                        <NavDropdown style={{ fontSize: '18px', color: '#E3F2FD' }} 
                        title="Қосымша" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/moderationpanel">Модератор панелі</NavDropdown.Item>
                            <NavDropdown.Item href="/administratorpanel">Администратор панелі</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/" style={{ fontSize: '18px' }}>
                            <img className="flag-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA8CAMAAABreNUXAAAAkFBMVEUAr8r+xQz/xgAAr8wArtEArs8Ars0ArdMArdX/yABhtKzOwFbJv1u9vmMtsMOLuJF6tprewkFwtaOuvHRKsrfmwzaduogArNhYs7JYtK/SwFM6sb6It5S3vHCsvHprtae8vWnZwUfUwU2buoLAv1rswzCTuY30xBzFvmIAq96juoOlu362vHeTuYdxtp7txCJUBP8LAAAD30lEQVRYheWZ25KjIBCGCQcPSAgqGCOeZxU3Tibv/3aLk6rdmb0Ctyq52M6dJfloaLp/WgD+QwsAIQg9n1vzpu2ofDYWH09X2h+fjQVhejrWAj5/oVWequNAnw4e39p0/vF0Lk5g8wEPT6YCQKorS+eUPx08vB3Hvs+evc7h1LDqFj/dX3z8aMti3OfuP8yW5Evds0J7IzEtcR7d8F647I9qLrypM6WVVPx+7m2G32GYyZmBwWsMInMnIYVCzSYz554TbyySCaW5zk8eQ9FF4zgbuI4w4XOxsLPw5pL5thi43Bj2GINNUXRnsahpeJfn/qIK7BuXiFZCsbVtPfy9lmV8pnf4sCWsh2D2zrMhiykyxmMEAXD4KSA8PAxOWMdN5MkN6hYYQ7vFfZ2vdUllfPhtMCWivHomvKDO1aCGvHfmEjDeQwUPX8CCxieP+HjYgC5t1HSu00XZSfDyi7uWq6JMnDwzD14FU5fBY7pXQ9ev7lowZ0Pne4ZLNo9F7Z7s+KWI2F/csqx9Ey1umrpIVjfuthmn5I6S79z4Uqheom3v3blJtghhnLZXbouJecGbv/yVIrOZA5HCHYynPElX47JMRDDJiUgnKb5zTZhPiyZUG48wGdq8anqHeA6ojt87RM60B9/dbfRCIoDTeeTO+h9XjDVHl3wVqln1DQbrtIbFt/ML9KguiBtWG+f08cldnPKkhKsxdgfPTfpz/AOOOw11yEkNVV+5L/RjnR3mqdM3A+OakDUpi6iPH2QIO13XSiI8QWVq5hpZ7nFlI6rqCxgAfl7s+zQ9wBiaBkgRS8zxzU4kV84B7XGOcA3HqE5CRNszLLoIlKXEWsazPpJAw+wEU+BcHXDz7po3SJ63JOrXEOCM8ZiOcs36d8UVseIuBfg6tR5VqWSFzZNuaW4xHOFhtR6HIi/vnaGHUGF7qPmkEbnGHurBpy4g3iYcBQsDGHVBd0JV9CMqOcGdETjQrPQphgNwr4OEVi0GGOQnjAMOyCWwbka6uWK7wXfmIXZ86/5HvOV/3B7a0uo7++NiXGw92LDaoyz46hzUme3vcbaMiWJUGZO2oX2s+5l7KZ1N1wEPXUf4TVhygHEYzUmJrYbeHlaDX93foWMJp9QeO0I+3sJPFxEXeeepr/bodrC1u/B8rKMH9SJR5Cvr9txTNiPXIb5pbs9QYOL4EHvr9j33so0rqNZinut1glNC/WLq02Tf+99DtzuhTqdxMEObyWjHTXTvvRt8qjgCbMbY1SvY+gyXvX2Gf7BX9VVe1UfC1fqSvtmr+oSv6ou+qg/8qr73q/r8r/qu8bLvOP+R/QIUwVRq+H/QtQAAAABJRU5ErkJggg==" alt="" />
                        </Nav.Link>
                        <Nav.Link href="/" style={{ fontSize: '18px' }}>
                            <img className="flag-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAG1BMVEX////VKx4AOab2+Px2jskAL6MAOaljNHXNKyEIIX58AAAAjElEQVR4nO3PgRGCAAwAsQKC7j8xY/jXSzbIDAAAAAAAAAAA/3YtMZ8l5l5iziVEakRqRGpEakRqRGpEakRqRGpEakRqRGpEakRqRGpEakRqRGpEakRq5llivkvMb4k5lhCpEakRqRGpEakRqRGpEakRqRGpEakRqRGpEakRqRGpEakRqRGpEakRqXkBxN57cahtag0AAAAASUVORK5CYII=" alt="" />
                        </Nav.Link>
                        <Nav.Link href="/" style={{ fontSize: '18px' }}>
                            <img className="flag-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA/CAMAAADt7Ke5AAAAolBMVEX///+7Ez4AJmS6CDrCRVzrzNC3ACu4ADHam6TUhZK5ADS3ACrx3N+7Ez27DzwAJGMAIWIAHWAAGl8AFl4AAFjAEjyMjqUlN20AEVxtH1YAAFIADVvq6+98g5/LztgACFq2ucdWX4aqrb8VLmg6R3bV1+BlbI7DxdGRlqxxeJcuPXBIVH6boLRfZYlCTXrz9PdvMV+Dc495W3wAAEt5UXWFfJaxCb+2AAAERElEQVRYhe2Zb5OkNBDGY9Q7vVO7O8EJy78BAgwEZlBPv/9XszuMni/0BVWp2qr1+sU+xdYWvWl4+tcJSnOAjgFPRf3f+vLzV0lC8e28I7ktPdUMFp8KhxpR4OuUeXHd2o4TYddvKyvdb5dH1HEZgGsxjUtg9awe0uUFv6sgeYPaPS+MVlVJ5WlSjazfLOomCzeb6q1++fB1kuA623n2QATuMhMQ4nCZURPgWs+5NkDTcrHaalMvtYFfvkkTnFdbC3a68w8Lef0gNFZfLw5Fs60EMkYXfaENq51VoohvKk37vnBRTa32TnRWlTxj06vRcY1tqxp5BtpeEuYFhLxpLCDCdWwKrjH4sc00aerGvhSdRq45pc1r3GC9B28DK3mfd5Zc6bC8Z1Gv9xJdJppBwrw0tc1CoGlpbhMv1dRjy7UGqquefQV6rrYB2eWszvz6bZrg9WaVyqRVlXt1ZQWnxky606BuotQprjWXuFb8Xr98fJckpF8tk+P1YLgv3AoBh+7Q9bEY9ET3gVUjLYFfvYR9kr2Loa4DsofDNonq0N8dIV+3g6gON+dFU+aVmq67Ev/Q/fAPLaoS/5iLGsU/tle3Axov794nCcnL68K2ZeVqtu2VexQObZ9pw+9cv+WiSy+9i//kt+/ShPTJoSu5Z+lyXXOdc49a0OiSIKsLYtVFnSHwdVEXkLBfcU+oaiO9qqqm2BqqUXxkt72RmiPXmLkBvlU3n7JvfBr3TwKgomL/AEfViGLYuWcxIR5qK1mZS7VN2ifX4IhfVxcempymwGoC0KA7NENOq+nIDpbWfMWkXECkru87Em3nld8yFPaLTk0dWGEao8c1/v59mnj6KDzZP6gqsr9TIx7Mb4T5vMzWHD56/yFJHD7Sep4dMx/8vBlhPzO/FObfa+6N4qMlatK+YdYlj8xn9oufmPl0MD+LzP9Li61ImZfuu4rMX/b98JGqIvs3NT6kTzP7ea7T0Ufw8jFN8HqLZiw0AuQj+4fVNTfxDw5/s38T9tt6vFjzxw9pgvN6tpAdgvXotX1448jrfGVL5Q6Y9RiygNmhKbkv+wQz3ZrFCOubVthP9ci+Yp3HnpkPMO+b9Ky085Xcr9qt/AO5qrL4C9U8mc+ciH5iPiSe63jEQC/s52fqpoUvDK7rYoX13Xow/8n+lFyAsMwhsv8S2Y+h7wKRAdcGMZQ/lHdPzH7ep/yYJFRk/p1iTXfZH3FNqwHjLB1nZ56lZXYG6lUrc85PSULmujbufxh0bR7nuZ73QTKD9P01zvR9fLam7mWuS9U3mHu2jPhj5sM/FUpz6JWi4JXNnXC9klR/ls+q/0WTPd8v8bYjEV9O8ygRT0/zN00bON83XitvmvHw/DyZaB4+PT9/ibcdifbvp/f7aY4rzp9vvFbfeK28aY7fzp/XJTpvPH0++SXediT6PnL6e0qaz0Hnvx+9Vt/4n+X9E1dHx8+IjLE2AAAAAElFTkSuQmCC" alt="" />
                        </Nav.Link>
                    </Nav> */}
                    <Nav>

                        {!isAuth && <Nav.Link href="/login" style={{ fontSize: '18px', color: '#E3F2FD' }}>Кіру</Nav.Link>}
                        {!isAuth && <Nav.Link eventKey={2} href="/registration" style={{ fontSize: '18px', color: '#E3F2FD' }}>
                            Регистрация
                        </Nav.Link>}
                        {isAuth && <Nav.Link href="/profile"
                            style={{ fontSize: '18px', color: '#0D47A1' }}>Қош келдіңіз!</Nav.Link>}
                        {isAuth && <Nav.Link onClick={() => dispatch(logout())}
                            style={{ fontSize: '18px', color: '#E3F2FD' }}>Шығу</Nav.Link>}
                        {isAuth &&
                            <div>
                                <img src={avatar} style={{ borderRadius: '30px', width: '50px', height: '50px' }} alt={usericon} />
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar