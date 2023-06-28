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
const DetailCategoryPage = (props: DetailCategoryPageProps) => {
    const [category, setCategory] = useState<APICategory>();
    const id = props.params.id;
    // Execute the fetchCategory function only once, when the component is mounted
    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await getCategoryById(id);
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

    return (
        <Box sx={{ marginTop: "100px", textAlign:"center"}}>
            <Typography variant="h4" component="h1" gutterBottom>
            Modifier la Catégorie 
            </Typography>
          <CategoryForm id={category?._id} name={category?.name}/>
        </Box>
      );
}

export default DetailCategoryPage;