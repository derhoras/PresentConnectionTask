import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import "./Home.css";
import Posts from "../components/Posts.js";
import Pagination from "../components/Pagination.js";
import axios from "axios";

const Home = () => {
    const [data, setData]= useState([]);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(() =>{
        getPosts();
    }, [])

    const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts");
     if(response.status === 200){
        setData(response.data);
     }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    
    <><div style={{ marginTop: "1px" }}>
          <h3>Posts List</h3>
          <Posts posts ={currentPosts} loading={loading} />
          <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
         
      </div><div class="footer">
              <p>By Justinas Lažauninkas</p>
          </div></>
  )
}

export default Home