import axios from "axios";
import { useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Alert, TextField, Button, Grid, Typography, Box, ListItem, List, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

export default function Search() {

    const [user, setUser] = useState('')
    const [data, setData] = useState('')
    const [alertText, setAlert] = useState('')
    const [severity, setSeverity] = useState('info')
    const [authed, setAuth] = useState(false)

    useEffect(() => {
        const newAuth = sessionStorage.getItem("isAuth")
        if (authed !== newAuth) {
            setAuth(newAuth)
            if (authed) {
                setSeverity('success')
                setAlert("You have successfully logged in!")
                document.getElementById("alert").style.display = "flex"
            }
            ;
        }
    }, [authed])

    function handleChange(e) {
        setUser(e.target.value)
    }

    function getUser(e) {
        e.preventDefault();
        const url = "/search/" + user
        axios.get(url).then((res) => {
            if (res.data["Status"] === "Error") {
                setAlert("User does not seem to exist!")
                setSeverity('error')
                document.getElementById("alert").style.display = "flex";
                document.getElementById("userInfo").style.display = "none";
            } else {
                setData(res.data)
                document.getElementById("alert").style.display = "none";
                document.getElementById("userInfo").style.display = "flex";
            }

        }).catch((err) => {
            setAlert("Please input a name before searching!")
            setSeverity('error')
            document.getElementById("alert").style.display = "flex";
        })
    }


    return (
        <Box mt={10} >
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
                <Grid item>

                </Grid>
            </Grid>
            <Box id="userInfo" alignItems="center" justifyContent="center" display='none' sx={{ width: '100%' }}>

                <Box
                    marginTop={5}
                    width='40%'

                    sx={{ bgcolor: 'Background.paper', border: 1 }} >
                    <Typography marginTop={2}>Profile</Typography>
                    <List sx={{ width: '100%', bgcolor: 'Background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data["username"]} secondary="Username" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CalendarTodayIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data["age"]} secondary="Age" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data["occupation"]} secondary="Occupation" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LocalPhoneIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data["phoneNumber"]} secondary="Number" />
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Box id="alert" mt={2} alignItems="center" justifyContent="center" display='none' sx={{ width: '100%' }}>
                <Alert sx={{ width: '30%' }} severity={severity}>{alertText}</Alert>
            </Box>
        </Box>



    )
}