import '../App.css';
import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import {Container,Button,Grid,List,Divider,FormControl,Paper, TextField,Typography, Box} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { messageSelector } from '../redux/reducers/messagesReducer/messageSelector';
import MessageList from './MessageList';

function Message(){
    const [author, setName] = useState('');
    const [text, setText] = useState('');
    const ref = useRef(null);
    const {id} = useParams();
    const messageList = useSelector(messageSelector);
    const dispatch = useDispatch();  


    
    const handelAdd = (e) => {
        e.preventDefault();
        const obj = {
            id: getLastId(messageList),
            text: text,
            author: author,
            chat_id: Number(id),
        }
        dispatch({
            type: 'addMessage',
            payload: obj
        })
        robot()
    }

    function getLastId(array){
      return array.length ? array[array.length - 1].id + 1 : 0
    }
  
    function robot(){
      const user = messageList[messageList.length-1];
      if(user && user.author !== "Админ"){
        const obj = {
            id: getLastId(messageList)+1,
            author: 'Админ',
            text: `Привет ${user.author}!`,
            chat_id: Number(id),
        }
        dispatch({
            type: 'robot',
            payload: obj,
            meta:{
                delyMs: 2000
            }
        })
      }
    }
     
    
    const messages = messageList.filter((message) => {
        if(!id) return true
        return message.chat_id === Number(id)
    })

    return (
        <Container >
            <Paper elevation={5}>
                <Box  p={3}>
                
                <Typography ref={ref} onMouseOver={()=> ref.current.style.color = '#00529B'}
                 onMouseOut={()=> ref.current.style.color = 'black'} variant='h5' gutterBottom>
                    <Link  to={'/blog'}>Назад</Link>
                </Typography>
                
                <Divider/>
                <Grid container sx={{ height: '70vh' }} spacing={2} alignItems="center">
                    <Grid id="chat-window" xs={12} item>
                        <List id="chat-window-messages">
                            <MessageList messages={messages}/>
                        </List>
                        
                    </Grid>
                    <Grid xs={3} item>
                        <FormControl fullWidth>
                            <TextField onChange={(event)=>setName(event.target.value)}
                                value={author}
                                label="Ваше имя"
                                variant="outlined"
                                autoFocus
                                />
                        </FormControl>
                    </Grid>
                    <Grid xs={7} item>
                        <FormControl fullWidth>
                            <TextField onChange={(event)=>setText(event.target.value)}
                                value={text}
                                label="Напишите ваше сообщение..."
                                variant="outlined"/>
                        </FormControl>
                    </Grid>
                    <Grid xs={2} item>
                        <Button id='bnt' onClick={handelAdd}
                        variant="contained" endIcon={<SendIcon />}>
                            Отправить
                        </Button>
                    </Grid>
                </Grid>
                </Box>
            </Paper>
        </Container>
    );
}

export default Message;