import '../App.css';
import * as React from 'react';
import {Avatar,Paper,Box,Grid,Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Container } from '@mui/system';

function Profile() {
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
  });

  return (
    <ThemeProvider theme={theme}>
    <Container>
    <Grid container  sx={{ height: '80vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ width: 56, height: 56, m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon fontSize='large'/>
          </Avatar>
          <Typography  variant="h3">
            Bhaumik Patel
          </Typography>
          <Box class="profile" >
            <Typography >
            <LocationOnOutlinedIcon/> San Francisco, USA 
            </Typography>
            <Typography >
              <EmailOutlinedIcon/> email@example.com
            </Typography>
            <Typography >
              <CalendarMonthOutlinedIcon/> June 02, 1988
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </Container>  
  </ThemeProvider>
  );
}

export default Profile;
