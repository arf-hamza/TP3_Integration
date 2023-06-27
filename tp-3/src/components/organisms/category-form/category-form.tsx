"use client";

import React, { useState } from "react";
import "../app/globals.css";
import {
    putApiCategory,
} from "../../../api/category.api";
import {
    Box,
    Button,
} from "@mui/material";
import { APICategory } from "../../../api/category.api";
import { useRouter } from "next/router";

const CategoryForm = () => {
    const [categories, setCategories] = useState<APICategory[]>([]);
    const router = useRouter();

    const handleUpdateCategory = async (category: APICategory) => {
        try {
            await putApiCategory(category._id, category);
            router.push("/category");
        } catch (error) {
            console.error("Erreur lors de la modification de la catégorie :", error);
        }
    };

    return (
        <>
            <Box sx={{ marginTop: "70px" }}>
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
                    onClick={() => router.push("/category")}
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
        </>
    );
}

export default CategoryForm;

