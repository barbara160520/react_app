import '../App.css';
import { AppBar, Toolbar, Typography,Container, Button,Switch } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState,useContext } from "react";
import PublicIcon from '@mui/icons-material/Public';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext,themes } from '../context';

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
    const [constTheme, setConstTheme] = useState(themes.light);
    
    const toggleTheme = () => {
      setConstTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }
    const theme = useContext(ThemeContext);
    return (
        <ThemeContext.Provider value={{themes: constTheme, toggleTheme:toggleTheme}}>
        <Fragment>
            <Box  mb={4}>
                <AppBar position="static">
                    <Toolbar sx={{bgcolor: constTheme.background}}>
                        <Box mr={2}>
                            <PublicIcon fontSize={'large'}/>
                        </Box>
                        <Box class='bar'
                            >
                            <CustomLink  to={'/'} >Home</CustomLink>
                            <CustomLink  to={'/user'} >Profile</CustomLink>
                            <CustomLink  to={'/blog'} >Blog</CustomLink>
                            <CustomLink  to={'/about'} >About</CustomLink>
                            <Box>
                              <Button sx={{color: constTheme.switch}} onClick={toggleTheme}>Light</Button>
                              <Button sx={{color: constTheme.switch}} onClick={toggleTheme}>Dark</Button>
                            </Box>
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
                backgroundColor: constTheme.background,
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
        </ThemeContext.Provider>
    )
}

export default Bar;