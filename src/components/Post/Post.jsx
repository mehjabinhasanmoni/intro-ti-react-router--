import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {title, body, id} = post;
    const navigate = useNavigate();

    const handleNavigation =() =>{
        navigate(`/post/${id}`);

    }
    return (
        <div class="post">
            <h1>Id : {id}</h1>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show detail</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;