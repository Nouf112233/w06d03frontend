import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate,useParams} from 'react-router-dom'

import './style.css';

function Register() {
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line
    
  
    const [username, setUserame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const getAllusers = async () => {
      const user = await axios.get("http://localhost:5000/user");
      setUsers(user.data);
    };
  
  
    const postuser =()=>{
     
      let x=0;
      // eslint-disable-next-line
      users.map(item=>{
        // eslint-disable-next-line
       if(item.email==email){
          x=1;
        }
      })
      // eslint-disable-next-line
      if(x==1)
      {
        let myWindow = window.open("", "", "width=200,height=100");
          myWindow.document.write("<p>email existing</p>");
          myWindow.focus();
        
      }
      else if(x===0)
      
      {
        axios.post("http://localhost:5000/user", {username:username,email:email,password:password})
        navigate(`/login`);
        
      }
      
        }
  
        useEffect(() => {
          getAllusers();
        }, []);
       
  
    return (
      <div className="all">
      <div className="base-containerr">
        <div className="header">Register</div>
        <div className="contentr">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUserame(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={postuser}>
              register
            </button>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Register;