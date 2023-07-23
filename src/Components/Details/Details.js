import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    
  const [postDetail, setPostDetail] = useState({})
  const {id} = useParams()
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setPostDetail(data))
    }, [])
    const {title, body} = postDetail
    const style = {
        border:'5px solid blue',
        margin:'10px',
        padding:'10px'
    }
    return (
        <div style={style}>
            <h1>Detail of id : {id}</h1>
            <h2>Title : {title}</h2>
            <p>Body : {body}</p>
            <Link to={`/comment/${id}`}>
                <button style={{cursor:'pointer'}}>See comment</button>
            </Link>
        </div>
    );
};

export default Details;