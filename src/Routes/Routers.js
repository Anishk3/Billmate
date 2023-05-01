import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home.jsx"
import SignUp from '../Pages/SignUp.jsx';
import Login from '../Pages/Login.jsx';
import Result from '../Pages/Result.jsx';
import About from '../Pages/About.jsx';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </Router>
    )
}

export default Routers
