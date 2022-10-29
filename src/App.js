import './App.css';
import * as React from 'react';
import Layout from './components/Layout';
import Main from './pages/Main';
import User from './pages/User';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from "./pages/NorFound";
import {Route, Routes} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chats from './components/Chats';
import Message from './components/Message';
import ProtectedRoutes from './components/ProtectedRoutes';
import AddContact from './pages/AddContact';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path={'/user'} element={<User/>}/>
            <Route path={'/blog'} element={<ProtectedRoutes><Blog/></ProtectedRoutes>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/chats'} element={<Chats/>}/>
            <Route path={'/message/:id'} element={<Message/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/addcontact'} element={<AddContact/>}/>
            <Route path={'/register'} element={<Register/>}/>
          </Route>
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>

    </ThemeProvider>
  );
}

export default App;
