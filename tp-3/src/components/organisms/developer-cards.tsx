"use client"

import React from 'react';
import { useTranslations } from "next-intl";

import { 
  Box,
 } from "@mui/material";
import ProfileCard from '../molecules/profil-card/profil-card';

export default function DeveloperCards() {
  const t = useTranslations();

  return (
    <Box sx={{display: "flex", flexWrap: 'wrap', justifyContent: "space-around", gap: "1rem"}}>
        <ProfileCard name='Aline' img='/img/aline.png' role={ `${t('developerCard.designer')}/${t('developerCard.developerFemale')}` } />
        <ProfileCard name='Jonathan' img='/img/jo.png' role={ `${t('developerCard.designer')}/${t('developerCard.developer')}` } />
        <ProfileCard name='Hamza' img='/img/hamza.png' role={ `${t('developerCard.designer')}/${t('developerCard.developer')}` }/>
        <ProfileCard name='Juliana' img='/img/juliana.jpg' role={ `${t('developerCard.designer')}/${t('developerCard.developerFemale')}` } />      
        <ProfileCard name='Stella' img='/img/stella.png' role={ `${t('developerCard.designer')}/${t('developerCard.developerFemale')}` }/>        
    </Box>
  );
  }

  