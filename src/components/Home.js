import React, { useContext} from 'react';
import "../App.css";
import {Container,Typography, Box,Grid} from "@mui/material";
import { ThemeContext } from '../context';
import Photo from './Photo';

function Home() {
  const {themes,toggleTheme} = useContext(ThemeContext);

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
                variant="h2"
                align="center"
                sx={{color: themes.text}}
                gutterBottom
              >
                Home Page
              </Typography>
              <Typography variant="h5" align="center" sx={{color: themes.text}} paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              <Box sx={{ py: 5 }}  >
                <Grid container spacing={4}>
                    <Photo />
                </Grid>
              </Box>
            </Container>
          </Box>
          
    );
    
}

export default Home;