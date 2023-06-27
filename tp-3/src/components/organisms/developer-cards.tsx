"use client"

import React from 'react';
import { 
  Box,
 } from "@mui/material";
import ProfileCard from '../molecules/profil-card/profil-card';

export default function DeveloperCards() {
    return (
    <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-around", gap: "1rem", marginTop: 3 }}>
        <ProfileCard name='Aline' img='/img/aline.png' role='Designer/Développeuse'/>
        <ProfileCard name='Jonathan' img='/img/jo.png' role='Designer/Développeur'/>
        <ProfileCard name='Hamza' img='/img/hamza.png' role='Designer/Développeur'/>
        <ProfileCard name='Juliana' img='/img/juliana.png' role='Designer/Développeuse'/>
        <ProfileCard name='Stella' img='/img/stella.png' role='Designer/Développeuse'/>
    </Box>
  );
  }

  