import React, { useContext } from 'react';
import "../App.css";
import {Container,Button,Stack, Typography, Box} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../context';

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
            <Container maxWidth="sm">
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
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button sx={{color: themes.switch}} variant="text">Next</Button>
              </Stack>
            </Container>
          </Box>
          
    );
    
}

export default Home;