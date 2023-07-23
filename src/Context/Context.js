import React, { createContext, useEffect, useState } from 'react';

const MyContext = createContext()
const Context = (props) => {
    const [post, setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=> setPost(data))
    }, [])
    return (
        <MyContext.Provider value={post}>
            {props.children}
        </MyContext.Provider>
    );
};

export default Context;
export {MyContext}