import React from 'react';
import {ListItem,ListItemText} from "@mui/material";

function MessageList({messages}) {
    return (
        messages.map(message => {
            return(
                <ListItem key={message.id}>
                    <ListItemText primary={`${message.author}: ${message.text}`}/>
                </ListItem>
            )
        })
    );
}

export default MessageList;