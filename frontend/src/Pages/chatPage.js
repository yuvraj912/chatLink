import React, { useEffect } from "react";
import axios from "axios";

const ChatPage = () =>{

    const fetchChats = async() =>{
        const data = await axios.get('/testing/test');
        console.log(data);
    };

    useEffect(() =>{
        fetchChats()
    }, [])

    return <div>Chat Page</div>
};

export default ChatPage;