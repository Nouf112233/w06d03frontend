import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

import "./App.css";
function App() {
  return (
    <>
      <Link to="/account">Account</Link>
      <Routes>
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
