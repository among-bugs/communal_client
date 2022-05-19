import React, {useEffect} from "react";
// import Button from "./Button";
import LoginForm from "./LoginForm"
import RegistraionForm from "./RegistrationForm";
// import { Container, Row, Col, Navbar } from "react-bootstrap"
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux";
import {auth} from "../action/user";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import NavigationBar from "./Navigationbar";
import Main from "./Main";
import Disk from "./Disk";
import News from "./News"
import Profile from "./Profile";
import Moderation from "./Moderation"
import Admin from './Admin'
import Service from "./Service"

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth())
}, [])
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar />
        { !isAuth ?
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegistraionForm />} />
            <Route path="/news" element={<News />} />
            <Route path="/moderationpanel" element={<Moderation />} />
            <Route path="/administratorpanel" element={<Admin />} /> 
          </Routes>
          : 
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Navigate to="/main" replace={true} />} />
            <Route exact path="/" element={<Navigate to="/main" replace={true} />} />
            <Route path="/news" element={<News />} />
            <Route path="/service" element={<Service />} />
            <Route path="/moderationpanel" element={<Moderation />} />
            <Route path="/administratorpanel" element={<Admin />} /> 
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;