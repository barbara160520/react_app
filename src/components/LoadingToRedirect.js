import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,Typography, Box,Grid} from "@mui/material";
import { ThemeContext } from '../context';

const LoadingToRedirect = () => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const {themes,toggleTheme} = useContext(ThemeContext);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },800)
        count === 0 && navigate('/login')
        return () => clearTimeout(interval)
    },[count,navigate])

    return (
    <Box
        sx={{
          bgcolor: themes.background,
          pt: 8,
          pb: 6,
        }}
      >
        <Container >
            <Typography
                component="h1"
                variant="h5"
                align="center"
                sx={{color: themes.text}}
                gutterBottom
            >
                Redirectiong you in {count} seconds
            </Typography>
        </Container>
    </Box>
    );
};

export default LoadingToRedirect;