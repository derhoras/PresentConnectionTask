import React from 'react';
import "./Posts.css";
import {Link} from 'react-router-dom';

const Posts = ({posts, loading}) => {
    if(loading){
        return <h3>Loading...</h3>
    }
    if(posts.length == 0){
        return <h5>There are no posts yet...</h5>
    }

    return (
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
            {posts && posts.map((item, index) => {
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
    )
}

export default Posts