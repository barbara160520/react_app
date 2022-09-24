import '../App.css';
import foto_1 from '/home/barbymak/React_GB/react_app/src/images/1.jpg';
import foto_2 from '/home/barbymak/React_GB/react_app/src/images/2.jpg';
import foto_3 from '/home/barbymak/React_GB/react_app/src/images/3.jpg';
import * as React from 'react';
import {Fragment} from 'react';
import {useState,useEffect,useRef} from 'react';
import {Container,Button,Grid,List,ListItem,Divider,FormControl,ListItemText,ListItemAvatar, Paper, TextField,Avatar,Typography, Box} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

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


    const arrayChatsList = arrayChats.map(chat => {
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


    return (
        <Container>
            <Paper elevation={5}>
                <Box  p={3}>
                <Typography ref={ref} onMouseOver={()=> ref.current.style.color = '#00529B'}
                 onMouseOut={()=> ref.current.style.color = 'black'} variant='h5' gutterBottom>
                    Ваша переписка:
                </Typography>
                <Divider/>
                <Grid container spacing={2} alignItems="center">
                    <Grid id="list-window" xs={6} item>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRight: 1, borderColor: "grey.300" }}>
                            {arrayChatsList}
                           
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