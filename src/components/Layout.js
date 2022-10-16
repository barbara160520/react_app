import '../App.css';
import { AppBar, Toolbar, Typography,Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState,useContext } from "react";
import PublicIcon from '@mui/icons-material/Public';
import {Outlet, useNavigate} from "react-router-dom";
import CustomLink from "./CustomLink";
import { ThemeContext,themes } from '../context';
import { useDispatch, useSelector } from 'react-redux';
import {userSelector} from '../redux/reducers/usersReducer/userSelector.js'
import { logoutInitial } from '../redux/reducers/usersReducer/userReducer';
import LogoutIcon from '@mui/icons-material/Logout';

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

function Layout() {

    const [constTheme, setConstTheme] = useState(themes.light);
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate('');


    const handelAuth = () => {
        if(user){
            dispatch(logoutInitial())
        }
        setTimeout(()=>{
            navigate('/login')
        },2000)
    }

    
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
                            <Button  sx={{color: constTheme.switch}} onClick={handelAuth}><LogoutIcon/></Button>
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

export default Layout;