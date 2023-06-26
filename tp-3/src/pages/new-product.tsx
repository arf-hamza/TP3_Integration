"use client";

import Box from '@mui/material/Box';
import "./globals.css";
import { Container } from '@mui/material';
import AddProduct from '@/app/components/molecules/add-product/add-product';

export default async function Home() {
    return (
        <main>
            <Container style={{margin: '100px', width: '800px'}}>
                <AddProduct/>
            </Container>
        </main>
    )
}