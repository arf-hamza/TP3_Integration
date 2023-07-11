"use client"

import React from 'react';
import { Box } from "@mui/material";
import Style from "@/app/page.module.css";
import { useTranslations } from "next-intl";

export default function WorkDescription() {
  const t = useTranslations();

    return (
    <Box className={ Style.work_box }>
      <h2>{ t('workDescription.title') }</h2> 
      <p>
        { t('workDescription.description')}
      </p>        
    </Box>
  );
};

  