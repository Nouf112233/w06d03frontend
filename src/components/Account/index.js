import React from "react";
// eslint-disable-next-line
import { useNavigate, useParams } from "react-router-dom";

import "./style.css";

function Account() {
  const navigate = useNavigate();

  const change = (x) => {
    navigate(`/${x}`);
  };
  return (
    <div className="container">
      <button onClick={() => change("login")}>login</button>
      <button onClick={() => change("register")}>register</button>
    </div>
  );
}

export default Account;
