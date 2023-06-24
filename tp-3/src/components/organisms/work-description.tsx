"use client"

import React from 'react';
import { 
  Box,
 } from "@mui/material";
 import Style from "@/app/page.module.css"


export default function WorkDescription() {
    return (
    <Box className={ Style.work_box } >
         <h2> Description </h2> 
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque illum minima, soluta totam, 
            placeat architecto dolore voluptatibus commodi velit, est incidunt itaque quisquam maxime dolorum 
            voluptates. Numquam, possimus corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
            atque illum minima, soluta totam, placeat architecto dolore voluptatibus commodi velit, est incidunt
             itaque quisquam maxime dolorum voluptates. Numquam, possimus corrupti. 
        </p>        
    </Box>
  );
  }

  