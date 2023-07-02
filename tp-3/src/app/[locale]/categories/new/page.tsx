"use client";
import React, { useState, useEffect } from "react";
import {
    APICategory,
    postApiCategory,
} from "@/api/category.api";
import {
    Box,
    Typography,
} from "@mui/material";
import CategoryForm from "@/components/organisms/category-form/category-form";
import { useTranslations } from "next-intl";

const CategoryPage = () => {
    const [categories, setCategories] = useState<APICategory[]>([]);
    const t = useTranslations();

    const handleAddCategory = async (newCategory: APICategory) => {
        try {
            const category: APICategory = {
                _id: "",
                name: newCategory.name,
            };
            await postApiCategory(category);
           } catch (error) {
            console.error("Erreur lors de l'ajout de la catégorie :", error);
        }
    };

return (
    <Box sx={{ marginTop: "100px", textAlign: "center" }}>
    <Typography variant="h4" component="h1" gutterBottom>
    {t("category.newmodifyTitle")}
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
