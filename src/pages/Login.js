import React, { useState,useContext } from 'react';
import { useDispatch } from 'react-redux';
import { loginInitial } from '../redux/reducers/usersReducer/userReducer';
import {NavLink, useNavigate} from "react-router-dom";
import {Container,Button,InputLabel,Input,Divider,FormControl,Paper, TextField,Typography, Box, Grid} from "@mui/material";
import { ThemeContext } from '../context';
import CustomLink from "../components/CustomLink";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        if(!email || !password){
            return;
        }
        dispatch(loginInitial(email,password))
        navigate('/')
    }

    const {themes,toggleTheme} = useContext(ThemeContext);
    return (
        <Container>
            <Paper elevation={5}>
                <Box p={3}>
                    <Grid 
                    container 
                    sx={{ height: '70vh' }} 
                    spacing={4} 
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                        <Grid  item>
                            <Typography 
                                component="h1"
                                variant="h2"
                                align="center"
                                sx={{color: themes.background}}
                                gutterBottom
                            >Вход</Typography>
                        </Grid>
                        <Grid  item>
                        <FormControl sx={{ gap: 2 }} fullWidth variant="standard"  >
                            <TextField
                                value={email}
                                label="Ваш email"
                                onChange={((e)=>setEmail(e.target.value))}
                                autoFocus
                            />
                            <TextField
                                value={password}
                                label="Ваш пароль"
                                onChange={((e)=>setPassword(e.target.value))}
                            />
                            
                        </FormControl>
                        </Grid>
                        <Grid item >
                            <Button variant="contained" onClick={handelSubmit} type='submit'>Войти</Button>
                            <Button variant="contained" style={{background:"#00529B", marginLeft:"15px"}} ><NavLink style={{color:"#FFFFFF"}} to={'/register'}>Регистрация</NavLink></Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
 
    );
};

export default Login;