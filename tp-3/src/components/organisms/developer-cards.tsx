"use client"

import React from 'react';
import { 
  Box,
 } from "@mui/material";
import ProfileCard from '../molecules/profil-card/profil-card';

export default function DeveloperCards() {
    return (
    <Box sx={{display: "flex", flexWrap: 'wrap', justifyContent: "space-around", gap: "1rem"}}>
        <ProfileCard name='Aline' img='/img/react.png' role='Designer/Développeuse' />
        <ProfileCard name='Jonathan' img='/img/react.png' role='Designer/Développeur' />
        <ProfileCard name='Hamza' img='/img/react.png' role='Designer/Développeur'/>
        <ProfileCard name='Juliana' img='/img/react.png' role='Designer/Développeuse' />      
        <ProfileCard name='Stella' img='/img/react.png' role='Designer/Développeuse'/>
        
    </Box>
  );
  }

  