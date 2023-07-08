"use client";
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ModifyProduct from '@/components/molecules/modify-product/modify-product';

export default async function ModProduct() {
    return (
        <main className='add-product'>
                <Box sx={{width: '100%',margin: {xs : '80px 5%', sm : '80px 10%', md : '80px 10%', lg : '80px 20%',},}}>
                    <ModifyProduct
                    name=''
                    price=''
                    category=''
                    creator=''
                    description=''
                    />
                </Box>
        </main>
    )
}