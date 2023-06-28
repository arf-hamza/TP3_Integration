"use client"
import React, { useState, useEffect } from "react";
import {
    APICategory,
    getCategoryById,
    putApiCategory,
} from "../../../api/category.api";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import CategoryForm from "@/components/organisms/category-form/category-form";

export interface DetailCategoryPageProps {
    params: {
        id: string;
      };
}
export default function DetailCategoryPage({ params }: DetailCategoryPageProps) {
console.log("CategoryPage");
console.log(params.id);
    const [category, setCategory] = useState<APICategory>();
    const CategoryPage = (category: APICategory) => {
    const id = params.id;

    useEffect(() => {
        console.log("useEffect");
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            console.log("fetchCategory");
            const response = await getCategoryById(id);
            console.log(response);
            setCategory(response);
        } catch (error) {
            console.error("Erreur lors de la récupération de la catégorie :", error);
        }
    };
    
    const handleUpdateCategory = async (category: APICategory) => {
        try {
            await putApiCategory(id, category);
        } catch (error) {
            console.error("Erreur lors de la modification de la catégorie :", error);
        }
    };
    
    };
    return (
        <Box sx={{ marginTop: "70px", textAlign:"center"}}>
            <h2>Modifier la Catégorie </h2>
            <h3>{category?.name}</h3>
          <CategoryForm/>
        </Box>
      );
}

