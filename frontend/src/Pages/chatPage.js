import React, { useEffect } from "react";
import axios from "axios";

const chatPage = () =>{

    const FetchChats = async() =>{
        const data = await axios.get('/test');
        console.log(data);

        useEffect(() =>{
            FetchChats()
        }, [])
        
    }

    return (<div>chatPage</div>)
}

export default chatPage;