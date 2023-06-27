"use client";

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const inputStyle = {
    '& .MuiInputBase-root': {color: '#FFFFFF'},                             // text
    '& .MuiFormLabel-root': {color: '#999999'},                             // label
    '& .MuiFormLabel-root.Mui-focused': {color: '#FFFFFF'},                 // label (focused)
    '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999999', },  // outline
    '&:hover fieldset': {borderColor: '#CCCCCC',},                          // outline (hover)
    '&.Mui-focused fieldset': {borderColor: '#FFFFFF'}},                    // outline (focused)
    }

interface ProductProps {
    name: string;
    price: string;
    category: string;
    creator: string;
    description: string;
    }

export default function ModifyProduct(props : ProductProps) {
return (
    <>
        <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
            <h1 style={{color: '#ffffff'}}>Modifier Produit</h1>
            <TextField fullWidth defaultValue={props.name} id="nom-produit" label="Nom du produit" variant="outlined" sx={inputStyle} />
            <TextField fullWidth defaultValue={props.price} id="prix-produit" label="Prix du produit" variant="outlined" sx={inputStyle} />
            <TextField fullWidth defaultValue={props.category} id="categorie-produit" label="Catégorie du produit" variant="outlined" sx={inputStyle}/>
            <TextField fullWidth defaultValue={props.creator} id="createur-produit" label="Créateur du produit" variant="outlined" sx={inputStyle}/>
            <TextField fullWidth defaultValue={props.description} id="description-produit" label="Description du produit" variant="outlined" sx={inputStyle}/>
            <Box>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={1}>
                    <Button variant="outlined" color="error">ANNULER</Button>
                    <Button variant="contained" sx={{bgcolor: '#ffffff', color: '#000000','&:hover': {bgcolor: '#dddddd'}}}>CONFIRMER</Button>
                </Stack>
            </Box>
        </Stack>
    </>
)}
