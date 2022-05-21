import axios from "axios"
import React, { useState } from "react";

export default function Delete(){

    const[user, setUser] = useState('')

    function handleChange(e){
        setUser(e.target.value)
    }

    function getUser(e){
        e.preventDefault();
        const url = "/delete/" + user
        axios.delete(url).then((res) => {
            console.log(res.data)
        })
    }


    return(
        <div>
            <input id="findUser" name="searchBox" placeholder="Find User" onChange={handleChange} />
            <button className="button" id="deleteBtn" onClick={getUser}>Delete</button>
        </div>
    )
}