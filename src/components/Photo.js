import React from 'react';
import {Container,Button,Stack, Typography, Box,Grid,Card,CardMedia,CardContent} from "@mui/material";

const Photo = ({photos}) => {
  return (
    photos.map((photo)=>{
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
      )})
  );
};

export default Photo;