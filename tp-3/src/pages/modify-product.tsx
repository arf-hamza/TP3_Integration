"use client";

import Box from '@mui/material/Box';
import "./globals.css";
import { Container } from '@mui/material';
import ModifyProduct from '@/app/components/molecules/modify-product/modify-product';

export default async function Home() {
    return (
        <main>
            <Container style={{margin: '100px', width: '800px'}}>
                <ModifyProduct
                name=''
                price=''
                category=''
                creator=''
                description=''
                />
            </Container>
        </main>
    )
}