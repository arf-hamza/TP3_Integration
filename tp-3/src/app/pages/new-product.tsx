"use client";

import Box from '@mui/material/Box';
import "./globals.css";
import { Container } from '@mui/material';
import AddProduct from '@/app/components/molecules/add-product/add-product';

export default async function NewProduct() {
    return (
            <main className='add-product'>
                <Box sx={{width: '100%',margin: {xs : '80px 5%', sm : '80px 10%', md : '80px 10%', lg : '80px 20%',},}}>
                    <AddProduct/>
                </Box>
            </main>
    )
}