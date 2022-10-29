import React from 'react';
import {useState,useRef} from 'react';
import {Container,Button,Grid,List,Divider,FormControl, Paper, TextField,Typography, Box} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ChatList from './ChatList';
import { useDispatch } from 'react-redux';

function Chats () {
    const [nameChat,setName] = useState([]);
    const ref = useRef(null);

    const dispatch = useDispatch();

    const handelAdd = () => {
        const obj = {
            id: Date.now(),
            name: nameChat,
        }
        dispatch({
            type: 'addChat',
            payload: obj
        })

    }

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
                        <Grid xs={6} item className="chatName">
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
                            <ChatList />
                        </List>  
                    </Grid>
                </Grid>
                </Box>
            </Paper>
        </Container>
    )
        
    
    
}

export default Chats;