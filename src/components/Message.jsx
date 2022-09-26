import '../App.css';
import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import {Container,Button,Grid,List,ListItem,Divider,FormControl,ListItemText, Paper, TextField,Typography, Box} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Chats from "./Chats"

function Message(){
    const [messageList, setMessageList] = useState([]);
    const [author, setName] = useState('');
    const [text, setText] = useState('');
    const ref = useRef(null);
      
    const handelSubmit = (e) => {
      e.preventDefault();
     
      setMessageList( prevState => [...prevState,{
        id: getLastId(prevState),
        text: text,
        author: author
      }])
      setName('')
      setText('')
    }
  
    function getLastId(array){
      return array.length ? array[array.length - 1].id + 1 : 0
    }
 
    useEffect(() => {
        setTimeout(() => {
            robot()
        },2000)
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
  
    const chatMessageList = messageList.map(message => {
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
                    Ваша переписка:
                </Typography>
                <Divider/>
                <Grid container sx={{ height: '70vh' }} spacing={2} alignItems="center">
                    <Grid id="list-window" xs={6} item>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRight: 1, borderColor: "grey.300" }}>
                            <Chats/>
                        </List>
                        
                    </Grid>
                    <Grid id="chat-window" xs={6} item>
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