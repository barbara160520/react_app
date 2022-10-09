import React from 'react';
import {Fragment} from 'react';
import {Button,ListItem,ListItemAvatar,Avatar,ListItemText, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelector } from '../redux/reducers/chatsReducer/chatSelector';


function ChatList(){

    const chats = useSelector(chatSelector);
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        dispatch({ 
            type: 'delete', 
            payload: {
                id:id
            },
            meta:{
                delyMs: 3000
            }
        })
    }

    return (
        chats.map( (chat) => {
            return(
                <ListItem sx={{borderBottom: 1, borderColor: "grey.300"}} key={chat.id}>
                    <Button onClick={() => handleDelete(chat.id)}><ClearIcon/></Button>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={chat.img} />
                        </ListItemAvatar>
                        <Link to={`/message/${chat.id}`} key={chat.id}>
                        <ListItemText
                            primary={chat.name}
                            secondary={
                            <Fragment>
                                <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                {chat.user}
                                </Typography>
                            </Fragment>
                            }
                        />
                        </Link>
                </ListItem>
                
        
            )})
    )
}

export default ChatList;