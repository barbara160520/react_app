import '../App.css';
import { AppBar, Toolbar, Typography,Container } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import PublicIcon from '@mui/icons-material/Public';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

function Copyright() {
    return (
      <Typography variant="body2" color="#F2F2F2">
        {'Copyright © '}
        <CustomLink  to={'/'} >React_App</CustomLink>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Bar() {

    return (
        <ThemeProvider theme={theme}>
        <Fragment>
            <Box mb={4}>
                <AppBar position="static">
                    <Toolbar>
                        <Box mr={2}>
                            <PublicIcon fontSize={'large'}/>
                        </Box>
                        <Box class='bar'
                            >
                            <CustomLink  to={'/'} >Home</CustomLink>
                            <CustomLink  to={'/user'} >Profile</CustomLink>
                            <CustomLink  to={'/blog'} >Blog</CustomLink>
                            <CustomLink  to={'/about'} >About</CustomLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box mb={4}
                sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '80vh',
                }}
            >
                <Outlet/>
            </Box>
            <Box
                component="footer"
                sx={{
                py: 2,
                px: 2,
                mt: 'auto',
                backgroundColor: theme.palette.primary.main,
                }}
            >
                <Container >
                <Typography  color="#FFFFFF">
                    My sticky footer can be found here.
                </Typography>
                <Copyright />
                </Container>
            </Box>
        </Fragment>
        </ThemeProvider>
    )
}

export default Bar;