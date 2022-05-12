import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import "./ViewPost.css";

const ViewPost = () => {
    const [post, setPost] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            getSinglePost(id);
        }
    }, [id]);

    const getSinglePost = async (id) => {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        if (response.status === 200) {
            setPost(response.data);
        }
    };
    return (
    <div style={{marginTop:"150px"}}>
        <div className="card">
            <div className="card-header">
                <p>Post Details</p>
            </div>
            <div className="container">
                <strong>Id: </strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>User Id: </strong>
                <span>{post && post.userId}</span>
                <br />
                <br />
                <strong>Title: </strong>
                <span>{post && post.title}</span>
                <br />
                <br />
                <strong>Body: </strong>
                <span>{post && post.body}</span>
                <br />
                <br />
                <Link to="/">
                    <button className="btn">Go Back</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ViewPost