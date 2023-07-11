"use client"
import React, { useState, useEffect } from "react";
import {
    APICategory,
    getCategoryById,
    putApiCategory,
} from "@/api/category.api";
import {
    Box,
    Typography,
} from "@mui/material";
import CategoryForm from "@/components/organisms/category-form/category-form";
import { useTranslations } from "next-intl";

export interface DetailCategoryPageProps {
    params: {
        id: string;
      };
}
const DetailCategoryPage = (props: DetailCategoryPageProps) => {
    const [category, setCategory] = useState<APICategory | undefined>();
    const id = props.params.id;
    const t = useTranslations();

    // Execute the fetchCategory function only once, when the component is mounted
    useEffect(() => {
        fetchCategory();
    },);

    const fetchCategory = async () => {
        try {
            const response = await getCategoryById(id);
            setCategory(response);
        } catch (error) {
            console.error("Erreur lors de la récupération de la catégorie :", error);
        }
    };
    
    const handleUpdateCategory = async (updatedCategory: APICategory) => {
        try {
            await putApiCategory(updatedCategory._id, updatedCategory);
            console.log("Catégorie mise à jour avec succès");
            setCategory(updatedCategory);
        } catch (error) {
            console.error("error", error);      
        }
    };

    return (
        <Box sx={{ marginTop: "100px", textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
            {t("category.modifyTitle")}         
        </Typography>
        {category && (
          <CategoryForm
            id={category._id}
            name={category.name}
            onCategoryAction={handleUpdateCategory}
          />
        )}
      </Box>
      );
}

export default DetailCategoryPage;