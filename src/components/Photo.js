import React,{useEffect} from 'react';
import {Container,Button,Stack, Typography, Box,Grid,Card,CardMedia,CardContent,Skeleton} from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { photoSelector,errorSelector,loadSelector } from '../redux/reducers/photosReducer/photoSelector'
import NotFound from "../pages/NorFound";
import { getData } from "../redux/reducers/photosReducer/photoReducer";

function Photo() {
  const photos = useSelector(photoSelector);
  const loading = useSelector(loadSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getData())
  },[])

  const fetchUsers = () => {
    dispatch(getData())
  }

  if(loading){
    return(
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    )
  }

  if(error){
    return(
      <div>
        Error
        <button onClick={fetchUsers}>back</button>
      </div>
    )
  }

  return (
 /*   photos.map((photo)=>{
      return(
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '0%',
                height: '100px'
              }}
              image="https://source.unsplash.com/random"//{photo.url}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {photo.username}
              </Typography>
              <Typography>
                {photo.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )})*/
      <div></div>
  );
}

export default Photo;