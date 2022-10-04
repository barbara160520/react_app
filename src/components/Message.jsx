import '../App.css';
import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import {Container,Button,Grid,List,ListItem,Divider,FormControl,ListItemText, Paper, TextField,Typography, Box} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { messageSelector } from '../redux/reducers/messageReducer/messageSelector';

function Message(){
    const [author, setName] = useState('');
    const [text, setText] = useState('');
    const ref = useRef(null);
    const {id} = useParams();

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
            type: 'add',
            payload: obj
        })
    }

    function getLastId(array){
      return array.length ? array[array.length - 1].id + 1 : 0
    }
 
    useEffect(() => {
        /*setTimeout(() => {
            robot()
        },2000)*/
    },[])

  
 /*   function robot(){
      const user = messageList[messageList.length - 1];
      if(user && user.author !== "Админ"){
        const obj = {
            id: getLastId(messageList),
            author: 'Админ',
            text: `Привет ${user.author}!`
        }
        dispatch({
            type: 'add',
            payload: obj
        })
      }
    }*/
  
    const messageList = useSelector(messageSelector);
    
    const messages = messageList.filter((message) => {
        if(!id) return true
        return message.chat_id === Number(id)
    })
    
    const chatMessageList = messages.map(message => {
        return(
            <ListItem key={message.id}>
                <ListItemText primary={`${message.author}: ${message.text}`}/>
            </ListItem>
        )
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
                            {chatMessageList}
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