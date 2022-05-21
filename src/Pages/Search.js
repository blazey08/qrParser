import axios from "axios";
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Button, Grid, Typography, Box } from "@mui/material";

export default function Search() {

    const [user, setUser] = useState('')

    function handleChange(e) {
        setUser(e.target.value)
    }

    function getUser(e) {
        e.preventDefault();
        const url = "/search/" + user
        axios.get(url).then((res) => {
            console.log(res.data)
        })
    }


    return (
        <Box mt={10}>
            <Typography variant="h4">Home Page</Typography>
            <Typography variant="subtitle1" marginBottom={5}>Anyone can search for a user</Typography>
            <Grid container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item>
                    <TextField
                        id="findUser"
                        label="Search User"
                        helperText="Please enter name of user"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }} marginLeft={1} marginBottom={2}>
                    <Button className="button" id="searchBtn" startIcon={<SearchIcon />} onClick={getUser} />
                </Grid>
            </Grid>
        </Box>

    )
}