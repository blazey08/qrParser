import axios from "axios";
import { useState } from "react"

export default function Search(){

    const[user, setUser] = useState('')

    function handleChange(e){
        setUser(e.target.value)
    }

    function getUser(e){
        e.preventDefault();
        const url = "/search/" + user
        axios.get(url).then((res) => {
            console.log(res.data)
        })
    }


    return(
        <div>
            <input id="findUser" name="searchBox" placeholder="Find User" onChange={handleChange} />
            <button className="button" id="searchBtn" onClick={getUser}>Search</button>
        </div>
    )
}