"use client";
import React, { useState, useEffect } from "react";
import {
    APICategory,
    postApiCategory,
} from "../../../api/category.api";
import {
    Box,
    Typography,
} from "@mui/material";
import CategoryForm from "@/components/organisms/category-form/category-form";

const CategoryPage = () => {
    const [categories, setCategories] = useState<APICategory[]>([]);

    const handleAddCategory = async (newCategory: APICategory) => {
        console.log("handleAddCategory");
        try {
            const category: APICategory = {
                _id: "",
                name: newCategory.name,
            };
            console.log("category", category);
            await postApiCategory(category);
            console.log("Catégorie ajoutée avec succès");
           } catch (error) {
            console.error("Erreur lors de l'ajout de la catégorie :", error);
        }
    };

return (
    <Box sx={{ marginTop: "100px", textAlign: "center" }}>
    <Typography variant="h4" component="h1" gutterBottom>
    Nouvelle Catégorie
    </Typography>
        <CategoryForm
        id=""
        name=""
        onCategoryAction={handleAddCategory}
        />
  </Box>
);
};

export default CategoryPage;
