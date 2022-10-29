import React, { useState,useContext } from 'react';
import {db} from '../servise/firebase';
import {Container,Button,Grid,TextField,FormControl,Paper, Typography, Box} from "@mui/material";
import { ThemeContext } from '../context';
import {NavLink} from "react-router-dom";


const initialState = {
    name: '',
    email: '',
    contact: ''
}

const AddContact = () => {
    const {themes,toggleTheme} = useContext(ThemeContext);
    const [state,setState] = useState(initialState);
    const{name,email,contact} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name||!email||!contact){
            console.log("Укажите ваши данные")
        }else{
            db.child('contacts').push(state,(e)=>{
                if(e){
                    console.log(e)
                }
                else{
                    console.log('sucesse')
                }
            })
        }
    }

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setState({...state,
            [name]:value})
    }

    return (




        <Container>
            <Paper elevation={5}>
                <Box p={3}>
                <Button variant="contained" style={{background:"#00529B", marginBottom:"15px"}} ><NavLink style={{color:"#FFFFFF"}} to={'/user'}>Назад</NavLink></Button>
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
                                variant="h5"
                                align="center"
                                sx={{color: themes.background}}
                                gutterBottom
                            >Добавление пользователей</Typography>
                        </Grid>
                        <Grid  item>
                            <FormControl sx={{ gap: 2 }} fullWidth variant="standard">
                                <TextField
                                    id={'name'}
                                    name={'name'}
                                    value={name}
                                    label="Имя"
                                    onChange={handleChange}
                                    autoFocus
                                />
                                <TextField
                                    id={'email'} 
                                    name={'email'}
                                    value={email}
                                    label="Email"
                                    onChange={handleChange}
                                />
                                <TextField
                                    id={'contact'}
                                    name={'contact'}
                                    value={contact}
                                    label="Контакты"
                                    onChange={handleChange}
                                />

                                <Button variant="contained" type={'submit'} value={'save'} onClick={handleSubmit}>Добавить</Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default AddContact;