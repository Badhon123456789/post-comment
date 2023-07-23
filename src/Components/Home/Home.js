import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const data = useContext(MyContext);
  return (
    <div>
      <h1>Home</h1>
      {data.map((post) => {
        const { postId, id, title, body } = post;
        return (
          <div className="style">
            <h2>ID:{id}</h2>
            <Link to={`/detail/${id}`}>
              <button  style={{cursor:'pointer'}}>See Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
