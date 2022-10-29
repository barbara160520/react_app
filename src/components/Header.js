import '../App.css';
import { AppBar, Toolbar,  Button , Box} from "@mui/material";
import {  useState} from "react";
import PublicIcon from '@mui/icons-material/Public';
import {useNavigate} from "react-router-dom";
import CustomLink from "./CustomLink";
import { themes } from '../context';
import { useDispatch, useSelector } from 'react-redux';
import {userSelector} from '../redux/reducers/usersReducer/userSelector.js'
import { logoutInitial } from '../redux/reducers/usersReducer/userReducer';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate('');
    const [constTheme, setConstTheme] = useState(themes.light);
    const toggleTheme = () => {
        setConstTheme(prevState => prevState === themes.light ? themes.dark : themes.light );
    }

    const handelAuth = () => {
        if(user){
            console.log(user)
            dispatch(logoutInitial(user))
            console.log(dispatch(logoutInitial()))
        }
        setTimeout(()=>{
            navigate('/login')
        },800)
    }


    return (
        <AppBar position="static">
        <Toolbar sx={{bgcolor: constTheme.background}}>
            <Box mr={2}>
                <PublicIcon fontSize={'large'}/>
            </Box>
            <Box className='bar'
                >
                <CustomLink  to={'/'} >Home</CustomLink>
                <CustomLink  to={'/user'} >Users</CustomLink>
                <CustomLink  to={'/blog'} >Blog</CustomLink>
                <CustomLink  to={'/about'} >About</CustomLink>
                <CustomLink  to={'/register'} >Sing Up</CustomLink>
                {user ? (<Button style={{color:"rgb(189, 229, 248)",fontSize:"18px",padding: 0,fontFamily:" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}} onClick={handelAuth} >Sing Out</Button>):
                (<CustomLink  to={'/login'} >Sing In</CustomLink>)}
                <Box>
                  <Button id="switch" style={{color:"rgb(189, 229, 248)",fontSize:"18px",padding: 0,fontFamily:" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}} onClick={toggleTheme}>Light</Button>
                </Box>
            </Box>
        </Toolbar>
    </AppBar>
    );
}

export default Header;