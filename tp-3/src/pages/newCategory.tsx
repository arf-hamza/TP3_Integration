"use client";
import React, { useState, useEffect } from "react";
import MyMenu from "@/components/molecules/my-menu/my-menu";
import "../app/globals.css";
import {
    getApiCategory,
    postApiCategory,
    putApiCategory,
    deleteApiCategory,
} from "../api/category.api";
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
} from "@mui/material";
import MyCardCategory from "@/components/molecules/card-category/my-card";
import { APICategory } from "../api/category.api";
import { useRouter } from "next/router";

const CategoryPage = () => {
    const [categories, setCategories] = useState<APICategory[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetchCategories();
    }
    , []);

    const fetchCategories = async () => {
        try {
            const response = await getApiCategory();
            setCategories(response);
        } catch (error) {
            console.error("Erreur lors de la récupération des catégories :", error);
        }
    };

    const handleDeleteCategory = async (categoryId: string) => {
        try {
            await deleteApiCategory(categoryId);
            fetchCategories();
        } catch (error) {
            console.error("Erreur lors de la suppression de la catégorie :", error);
        }
    };

    const handleAddCategory = async () => {
        try {
            const category: APICategory = {
                _id: "",
                name: "Nouvelle catégorie",
            };
            await postApiCategory(category);
            fetchCategories();
        } catch (error) {
            console.error("Erreur lors de l'ajout de la catégorie :", error);
        }
    };

return (
    <Box sx={{ textAlign:"center"}}>
        <MyMenu />
        <Box sx={{ marginTop: "100px" }}>
            <Typography variant="h3" align="center">
            Nouvelle Catégorie
            </Typography>
        </Box>
        <Box sx={{ marginTop: "70px" }}>  
            <input type="text" placeholder="Nouvelle catégorie" />
        </Box>

        <Box sx={{ marginTop: "70px" }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddCategory}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/category")}
            >
                Cancel
            </Button>
        </Box>
    </Box>
);
};

export default CategoryPage;
