import axios from "axios"
import React, { useState } from "react";
import { Button, Input, Typography } from "@mui/material";

export default function Upload() {

    const [file, setFile] = useState()
    function handleChange(event) {
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

    return (
        <div className="App">
            <title>QR Parser</title>
            <Typography variant="h4" margin={5}>Upload QR Code</Typography>
            <form method="POST" onSubmit={handleSubmit} id="uploadform">
                <Input id="imguploader" name="image" type="file" disableUnderline={true}  onChange={handleChange} />
                <Button className="button" id="uploadbtn" type="submit">Upload</Button>
            </form>
        </div>
    )

}

