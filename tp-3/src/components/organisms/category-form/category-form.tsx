"use client";

import React, { useState } from "react";
import {
    putApiCategory,
} from "../../../api/category.api";
import {
    Box,
    Button,
} from "@mui/material";
import { APICategory } from "../../../api/category.api";
import { Form } from "react-router-dom";

export interface CategoryFormProps {
    id?: string;
    name?: string;
}

const CategoryForm = (props:CategoryFormProps) => {

    const handleUpdateCategory = async (category: APICategory) => {
        try {
            await putApiCategory(category._id, category);
        } catch (error) {
            console.error("Erreur lors de la modification de la catégorie :", error);
        }
    };

    return (
        <form >
            <Box sx={{ marginTop: "70px", textAlign:"center"}}>
            <Box>
                <input
                    type="text"
                    placeholder="Catégorie"
                    style={{
                        width: "50%",
                        height: "40px",
                        padding: "10px",
                        fontSize: "16px",
                        backgroundColor: "black",
                        borderColor: "gray",
                        color: "white",
                    }}
                    value={props.name}
                />
            </Box>

            <Box sx={{ marginTop: "70px" }}>
                <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => handleUpdateCategory}
                    style={{
                        backgroundColor: "gray",
                        color: "white",
                        borderRadius: "0",
                        width: "200px",
                    }}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    href="/categories"
                    style={{
                        backgroundColor: "white",
                        color: "gray",
                        borderRadius: "0",
                        width: "200px",
                    }}
                >
                    Cancel
                </Button>
            </Box>
            </Box>
        </form>
    );
}

export default CategoryForm;