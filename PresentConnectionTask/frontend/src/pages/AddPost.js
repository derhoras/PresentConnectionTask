import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';
import "./AddPost.css";
import {toast} from "react-toastify";

const initState = {
    userId: "",
    title: "",
    body: "",
};

const AddPost = () => {
const [state, setState] = useState(initState);

const {userId, title, body} = state;

const history = useNavigate();
const addPost = async (data) => {
    const response = await axios.post("http://localhost:5000/api/posts", data);
    if(response.status === 201) {
        toast.success("Post added successfully");
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    if(!userId || !title || !body) {
        toast.error("Please fill each input field")
    } else {
        addPost(state);
        setTimeout(() => history("/"), 500);

    }
};

const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state,[name]:value })
}

  return (
    <div style={{marginTop:"10px"}}>
        <form
         style={{
             margin:"auto",
              padding:"15px",
              maxWidth:"400px",
              alignContent:"center",
            }}
            onSubmit={handleSubmit}
        >
            <label htmlFor="userId">User Id</label>
            <input
            type="text"
            id="userId"
            name="userId"
            placeholder="Enter User Id ..."
            onChange={handleInputChange}
            value={userId} 
            />

            <label htmlFor="title">Title</label>
            <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title ..."
            onChange={handleInputChange}
            value={title} 
            />

            <label htmlFor="body">Body</label>
            <input
            type="text"
            id="body"
            name="body"
            placeholder="Enter Body ..."
            onChange={handleInputChange}
            value={body} 
            />
            <input type="submit" value="Add" />
        </form>
    </div>
    
  )
}

export default AddPost