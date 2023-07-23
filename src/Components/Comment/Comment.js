import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Comment = () => {
    const [postComment, setPostComment] = useState([])
    const {postId} = useParams()
    useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPostComment(data))

    },[])
    const style = {
        border:'2px solid gray',
        margin: '10px'
    }
    return (
        <div>
            <h1>This is comment of id : {postId}</h1>
            {
                postComment.map(c=>{
                    const {name,email,body,id} = c
                    return <div style={style}>
                        <h2>Comment no : {id}</h2>
                    <h2>Name : {name}</h2>
                    <h3>Email : {email}</h3>
                    <p>Body : {body}</p>
                    </div>
                })
            }
        </div>
    );
};

export default Comment;