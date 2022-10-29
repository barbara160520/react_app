import React from 'react';
import {Container} from "@mui/material";
import Chats from '../components/Chats';
import { userSelector } from '../redux/reducers/usersReducer/userSelector';
import { useSelector } from 'react-redux';



const Blog = () => {

//    const user = useSelector(userSelector);
//    console.log(user);


    return (
        <Container>
            <Chats/>
        </Container>
    );
};

export default Blog;