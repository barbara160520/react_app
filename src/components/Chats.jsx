import React from 'react';
import foto_1 from '/home/barbymak/React_GB/react_app/src/images/1.jpg';
import foto_2 from '/home/barbymak/React_GB/react_app/src/images/2.jpg';
import foto_3 from '/home/barbymak/React_GB/react_app/src/images/3.jpg';
import {Fragment,useState} from 'react';
import {ListItem,ListItemText,ListItemAvatar, Avatar,Typography } from "@mui/material";

function Chats () {
    const [arrayChats, setArrayChats] = useState([
        {
            id: 1,
            img: foto_1,
            pre_text: 'Brunch this weekend?',
            name: 'Ali Connors',
            message: " — I'll be in your neighborhood doing errands this…"
        },
        {
            id: 2,
            img: foto_2,
            pre_text: 'Summer BBQ',
            name: 'to Scott, Alex, Jennifer',
            message: " — Wish I could come, but I'm out of town this…"
        },
        {
            id: 3,
            img: foto_3,
            pre_text: 'Oui Oui',
            name: 'Sandra Adams',
            message: ' — Do you have Paris recommendations? Have you ever…'
        }
    ]);

    return (
        arrayChats.map(chat => {
            return(
                <ListItem sx={{borderBottom: 1, borderColor: "grey.300"}} key={chat.id}  alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={chat.img} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={chat.pre_text}
                        secondary={
                        <Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            {chat.name}
                            </Typography>
                            {`${chat.message}`}
                        </Fragment>
                        }
                    />
                </ListItem>
                
            )
        })
    );
    
}

export default Chats;