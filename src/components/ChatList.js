import React from 'react';
import {Fragment} from 'react';
import {Button,ListItem,ListItemAvatar,FormControl,Avatar,ListItemText, Paper, TextField,Typography, Box} from "@mui/material";
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';


function ChatList({arrayChats,setArrayChats}){

    const handelDelete = (id) => {
        const filtered = arrayChats.filter((chat) => chat.id !== id)
        setArrayChats(filtered);
    }

    return (
        arrayChats.map( chat => {
            return(
                <ListItem sx={{borderBottom: 1, borderColor: "grey.300"}} >
                    <Button onClick={() => handelDelete(chat.id)}><ClearIcon/></Button>
                    
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