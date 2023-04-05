import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div className='post-container'>

           <h1>All posts are here : {posts.length}</h1>
           <div className='Posts'>
                {
                    posts.map(post =><Post
                    key={post.id}
                    post={post}>

                    </Post>)
                } 
           </div>
           
        </div>
    );
};

export default Posts;