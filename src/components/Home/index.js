import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

import axios from "axios";

import './style.css';

function Home() {
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
  
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const item = await axios.get("http://localhost:5000/food");
  
      setFoods(item.data);
      console.log(foods);
    };
  
   
  
    return (
  
      <div className="container">
      
        {foods.map((food) => {
            return (
              <div  className="items">
                <h3>{food.name}</h3>
                <h1>{food.type}</h1>
              </div>
            );
          }
        )}
        </div>
     
  
    );
}

export default Home;