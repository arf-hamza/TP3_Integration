"use client"

import React from 'react';
import { Box } from "@mui/material";
import Style from "@/app/page.module.css";

import { useTranslation } from 'react-i18next';
import "../../../i18n"

export default function WorkDescription() {
  const { t } = useTranslation();
    return (
    <Box className={ Style.work_box }>
      <h2>{t('home.title')}</h2> 
      <p>{t('home.description')}</p>        
    </Box>
  );
};

  