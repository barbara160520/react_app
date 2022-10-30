import '../App.css';
import React, { useState,useEffect } from 'react';
import {Link,Paper,Box,Grid,Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Button, Container } from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {db} from '../servise/firebase'
import {NavLink} from "react-router-dom";

function Profile() {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#00529B',
      },
      secondary: {
        main: '#BDE5F8',
      },
      error: {
        main: '#b71c1c',
      },
      warning: {
        main: '#ffab40',
      },
    },
  });

  const [data,setData] = useState({});
  useEffect(() => {
    db.child('contacts').on("value", (snap) => {
      if(snap.val() !== null){
        setData({...snap.val()})
      }else{
        setData({})
      }
    })

    return ()=>{
      setData({})
    }

  },[])




  return (
    <ThemeProvider theme={theme}>
    <Container>
    <Button style={{background:"#00529B", marginBottom:"15px"}} ><NavLink style={{color:"#BDE5F8"}} to={'/addcontact'}>Добавить пользователя</NavLink></Button>
    <Grid container  sx={{ height: '80vh' }}>
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >Контакты</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Object.keys(data).map((id)=>{
              return(
                <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{data[id].name}</TableCell>
                  <TableCell >{data[id].email}</TableCell>
                  <TableCell >{data[id].contact}</TableCell>
                </TableRow>
              )
            })}
           </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    </Container>  
  </ThemeProvider>
  );
}

export default Profile;
