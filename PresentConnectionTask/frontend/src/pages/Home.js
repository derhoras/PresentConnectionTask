import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import "./Home.css";
import axios from "axios";

const Home = () => {
    const [data, setData]= useState([]);

    useEffect(() =>{
        getPosts();
    }, [])

    const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts");
     if(response.status === 200){
        setData(response.data);
     }
    };

  return (
    
    <><div style={{ marginTop: "1px" }}>
          <h3>Posts List</h3>
          <table className="styled-table">
              <thead>
                  <tr>
                      <th style={{ textAlign: "center" }}>Id</th>
                      <th style={{ textAlign: "center" }}>User Id</th>
                      <th style={{ textAlign: "center" }}>Title</th>
                      <th style={{ textAlign: "center" }}>Body</th>
                      <th style={{ textAlign: "center" }}>Details</th>
                  </tr>
              </thead>
              <tbody>
                  {data && data.map((item, index) => {
                      return (
                          <tr key={index}>
                              <th scope="row">{item.id}</th>
                              <td>{item.userId}</td>
                              <td>{item.title}</td>
                              <td>{item.body}</td>
                              <td>
                                  <Link to={`/view/${item.id}`}>
                                      <button className="btn">View</button>
                                  </Link>
                              </td>
                          </tr>
                      );
                  })}
              </tbody>
          </table>
      </div><div class="footer">
              <p>By Justinas Lažauninkas</p>
          </div></>
  )
}

export default Home