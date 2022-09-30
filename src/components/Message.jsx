import '../App.css';
import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import {Container,Button,Grid,List,ListItem,Divider,FormControl,ListItemText, Paper, TextField,Typography, Box} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Chats from "./Chats"
import { Link, useParams } from 'react-router-dom';
import ChatList from './ChatList';

function Message(){
    const [messageList, setMessageList] = useState([
        {
            id:1,
            text:"I'll be in your neighborhood doing errands this morning",
            author:"Ali",
            chat_id: 1
        },
        {
            id:2,
            text:"Ok",
            author:"Scott",
            chat_id: 1
        },
        {
            id:3,
            text:"Do you have my recommendations? ",
            author:"Alex",
            chat_id: 2
        },        {
            id:4,
            text:"Yes",
            author:"Jennifer",
            chat_id: 2
        },        {
            id:5,
            text:"Wish I could come, but I'm out of town this.",
            author:"Sandra",
            chat_id: 3
        },        {
            id:6,
            text:"Clear",
            author:"Adam",
            chat_id: 3
        }
    ]);
    const [author, setName] = useState('');
    const [text, setText] = useState('');
    const ref = useRef(null);
      
    const handelSubmit = (e) => {
      e.preventDefault();
     
/*      setMessageList( prevState => [...prevState,{
        id: getLastId(prevState),
        text: text,
        author: author
      }])*/
      setName('')
      setText('')
    }
  
    function getLastId(array){
      return array.length ? array[array.length - 1].id + 1 : 0
    }
 
    useEffect(() => {
        /*setTimeout(() => {
            robot()
        },2000)*/
    },[messageList])

  
    function robot(){
      const user = messageList[messageList.length - 1];
      if(user && user.author !== "Админ"){
        setMessageList( prevState => [...prevState, {
          id: getLastId(prevState),
          author: 'Админ',
          text: `Привет ${user.author}!` 
        }]);
      }
    }
  
    const {id} = useParams();

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
                        <Button id='bnt' onClick={handelSubmit}
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