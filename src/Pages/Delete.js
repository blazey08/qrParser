import axios from "axios"
import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box, Alert } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "./styles.css"

export default function Delete() {

    const [user, setUser] = useState('')

    function handleChange(e) {
        setUser(e.target.value)
    }

    function getUser(e) {
        e.preventDefault();
        const url = "/delete/" + user
        axios.delete(url).then((res) => {
            console.log(res.data)
            document.getElementById("deleteAlert").style.display = "block";
        })
    }


    return (
        <Box mt={10}>
            <Typography variant="h4" margin={3}>Delete Page</Typography>
            <Grid container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item>
                    <TextField
                        id="delete"
                        label="Delete User"
                        helperText="Please enter name of user to delete"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }} marginLeft={1} marginBottom={2}>
                    <Button className="button" id="searchBtn" startIcon={<DeleteIcon />} onClick={getUser} />
                </Grid>
            </Grid>
            <Box id="deleteAlert" sx={{width: '35%'}} display='none' marginLeft={25} marginTop={4}>            
                <Alert  severity="success">Successfully deleted user!</Alert>
            </Box>
        </Box>

    )
}