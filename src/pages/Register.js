import React, { useState,useContext } from 'react';
import { useDispatch } from 'react-redux';
import { registerInitial } from '../redux/reducers/usersReducer/userReducer';
import {NavLink,useNavigate} from "react-router-dom";
import {Container,Button,Grid,TextField,FormControl,Paper, Typography, Box} from "@mui/material";
import { ThemeContext } from '../context';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const [displayName,setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitial(email,password,displayName))
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
                            >Регистрация</Typography>
                        </Grid>
                        <Grid  item>
                        <FormControl sx={{ gap: 2 }} fullWidth variant="standard"  >
                            <TextField
                                value={displayName}
                                label="Ваше Имя"
                                onChange={((e)=>setDisplayName(e.target.value))}
                                autoFocus
                            />
                            <TextField
                                value={email}
                                label="Ваш Email"
                                onChange={((e)=>setEmail(e.target.value))}
                            />
                            <TextField
                                value={password}
                                label="Ваш Пароль"
                                onChange={((e)=>setPassword(e.target.value))}
                            />
                            <TextField
                                value={passwordConfirm}
                                label="Повторите Ваш Пароль"
                                onChange={((e)=>setPasswordConfirm(e.target.value))}
                            />
                            
                        </FormControl>
                        </Grid>
                        <Grid item >
                            <Button variant="contained" onClick={handelSubmit} type='submit'>Зарегистрироваться</Button>
                            <Button variant="contained" style={{background:"#00529B",marginLeft:"15px"}} ><NavLink style={{color:"#FFFFFF"}} to={'/login'}>Войти</NavLink></Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>

    );
};

export default Register;