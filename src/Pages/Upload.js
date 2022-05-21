import { render } from "@testing-library/react";
import axios from "axios"
import React, { useState } from "react";

export default function Upload() {

    const [file, setFile] = useState()
    function handleChange(event){
        setFile(event.target.files[0])
    }

    // Submission of form
    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData()
        data.append('file', file)
        data.append('fileName', file.name)

        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data; boundary=$form._boundary'
            }
        }

        // Posting to backend
        axios.post('/upload', data, config).then((response) => {
            console.log(response.data);
        });

    }
    {
        return (
            <div className="App">
                <title>QR Parser</title>
                <form method="POST" onSubmit={handleSubmit} id="uploadform">
                    <h1>Upload QR Code</h1>
                    <div>
                        <input id="imguploader" name="image" type="file" onChange={handleChange}/>
                    </div>
                    <button className="button" id="uploadbtn" type="submit">Upload</button>
                </form>
            </div>
        )
    }
}

