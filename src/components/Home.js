import React from 'react';
import "../App.css";
import {Container,Button,Stack, Typography, Box} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Home() {
    const theme = createTheme({
        palette: {
          type: 'light',
          primary: {
            main: '#00529B',
          },
          secondary: {
            main: '#BDE5F8',
          },
          error: {
            main: '#b71c1c',
          },
          warning: {
            main: '#ffab40',
          },
        },
        text:{
            primary:{
                main: '#FFFFFF',
            },
            secondary: {
                main: '#F2F2F2',
            },
        },
      });
    
    return (
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Home Page
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
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
                <Button variant="outlined">Next</Button>
              </Stack>
            </Container>
          </Box>
          </ThemeProvider>
    );
    
}

export default Home;