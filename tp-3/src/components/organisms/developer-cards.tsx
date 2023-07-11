"use client"

import React from 'react';
import { 
  Box,
 } from "@mui/material";
import ProfileCard from '../molecules/profil-card/profil-card';

import { useTranslation } from 'react-i18next';
import "../../../i18n"

export default function DeveloperCards() {
  const { t } = useTranslation();
    return (
    <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-around", gap: "1rem", marginTop: 3 }}>
        <ProfileCard name='Aline' img='/img/react.png' role={t('home.aline')}/>
        <ProfileCard name='Jonathan' img='/img/react.png' role={t('home.jonathan')}/>
        <ProfileCard name='Hamza' img='/img/react.png' role={t('home.hamza')}/>
        <ProfileCard name='Juliana' img='/img/react.png' role={t('home.juliana')}/>
        <ProfileCard name='Stella' img='/img/react.png' role={t('home.stella')}/>
    </Box>
  );
  }

  