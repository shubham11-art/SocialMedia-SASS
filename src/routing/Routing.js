import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
        <Route path="/profile/:id" element=<Profile /> />
      </Routes>
    </Router>
  );
};

export default Routing;

// @media only screen and (max-width: 378px) {
//   .top_section {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   .top_section h1 {
//     font-size: 30px;
//     font-weight: bold;
//     color: #000;
//   }

//   .top_section h4 {
//     text-align: center;
//     font-size: 25px;
//     font-weight: 300px;
//   }
//   .about_section h2 {
//     text-align: center;
//   }
// }
