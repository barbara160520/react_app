import React from 'react';
import foto_1 from '/home/barbymak/React_GB/react_app/src/images/1.jpg';
import foto_2 from '/home/barbymak/React_GB/react_app/src/images/2.jpg';
import foto_3 from '/home/barbymak/React_GB/react_app/src/images/3.jpg';
import {Fragment,useState,useRef} from 'react';
import {Container,Button,Grid,List,ListItem,Divider,ListItemAvatar,FormControl,Avatar,ListItemText, Paper, TextField,Typography, Box} from "@mui/material";
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import ChatList from './ChatList';

function Chats () {
    const [arrayChats, setArrayChats] = useState([
        {
            id: 1,
            img: foto_1,
            name: 'Weekend',
            user: 'Scott'
        },
        {
            id: 2,
            img: foto_2,
            name: 'Summer',
            user: 'Ali'
       },
        {
            id: 3,
            img: foto_3,
            name: 'Oui Oui',
            user: 'Sandra'
       }
    ]);

    const [nameChat,setName] = useState([]);

    const ref = useRef(null);

    const handelAdd = () => {
        const obj ={
            id: Date.now(),
            name: nameChat,
        }
        setArrayChats(prevState => [...prevState,obj]);
    }
    /*                <FormControl fullWidth>
                    <TextField 
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        label="Добавить чат"
                        variant="outlined"/>
                </FormControl>
                <Button onClick={handelAdd()} ><AddIcon/></Button>*/

    return(
        <Container >
            <Paper elevation={5}>
                <Box  p={3}>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                        <Typography ref={ref} onMouseOver={()=> ref.current.style.color = '#00529B'}
                            onMouseOut={()=> ref.current.style.color = 'black'} variant='h5' >
                            Ваша переписка 
                        </Typography>
                        </Grid>
                        <Grid xs={6} item class="chatName">
                            <FormControl sx={{m: 1}} >
                                <TextField 
                                    onChange={(event)=> setName(event.target.value)}
                                    value={nameChat}
                                    size="small"
                                    label="Добавить чат"
                                    variant="filled"/>
                            </FormControl>
                            <Button onClick={handelAdd} ><AddIcon/></Button>
                        </Grid>
                    </Grid>
                <Divider/>
                <Grid container sx={{ height: '60vh' }} spacing={2} alignItems="center">
                    <Grid id="list-window" xs={12} item>
                        <List sx={{ p: 0, m: 0, width: '100%',  bgcolor: 'background.paper',borderLeft: 1, borderRight: 1, borderColor: "grey.300" }}>
                            <ChatList arrayChats={arrayChats} setArrayChats={setArrayChats} />
                        </List>
                        
                    </Grid>
                </Grid>
                </Box>
            </Paper>
        </Container>
    )
        
    
    
}

export default Chats;