"use client"

import React from 'react';
import { 
  Box,
  Card,
  CardActionArea,  
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

export interface ProfileCard{
  name: string;
  img?: string;
  role: string
}

export default function ProfileCard({name, img, role}: ProfileCard) {
    return (
      <Card sx={{ maxWidth: 345, background:"lightgray"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={name}
          />
          <CardContent sx={{ backgroundColor: '#424242', color: 'white'}}>
            <Typography gutterBottom variant="h5" component="div">
              { name }
            </Typography>
            <Typography variant="body2">
              {role}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  