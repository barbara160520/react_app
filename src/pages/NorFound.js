import React from 'react';
import p_404 from '../images/p_404.webp'
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../App.css';

const NorFound = () => {
    return (
        
        <Typography class="error_page">
            <img src={p_404}></img>
            <Link  to={'/'} >Go Back</Link>
        </Typography>
        
        
    );
};

export default NorFound;