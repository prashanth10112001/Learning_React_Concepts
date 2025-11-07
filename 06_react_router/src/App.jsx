import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserProfileWrapper from "./components/UserProfileWrapper";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |{" "}
          <Link to="/user/23">User</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user/:id" element={<UserProfileWrapper />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
