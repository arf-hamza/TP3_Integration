"use client";

import React, { useState, useEffect } from "react";
import {
    APICategory,
  getApiCategory,
  postApiCategory,
  putApiCategory,
  deleteApiCategory,
} from "../../../api/category.api";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MyCardCategory from "@/components/molecules/card-category/my-card";
import { Console } from "console";

export interface CategoryListProps {
  categories: APICategory[];
}
const CategoryList = (props: CategoryListProps) => {
  const [categories, setCategories] = useState<APICategory[]>(props.categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      console.log("fetchCategories");
      const response = await getApiCategory();
      setCategories(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    try {
      console.log("handleDeleteCategory");
      await deleteApiCategory(categoryId);
      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la suppression de la catégorie :", error);
    }
  };

  const handleAddCategory = async () => {
    try {
      console.log("handleAddCategory");
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

  const handleUpdateCategory = async (category: APICategory) => {
    try {
      console.log("handleUpdateCategory");
      await putApiCategory(category._id, category);
      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie :", error);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "10vh",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <Typography color="white" variant="h4">
          Liste des catégories
        </Typography>
        <Button variant="contained" color="primary" href = "/categories/new">
          Ajouter une catégorie
        </Button>
      </Box>
      <Box mt={2} sx={{ backgroundColor: "black" }} >
        <Grid container spacing={6} padding={5}>
          {categories.map((category) => (
            <MyCardCategory
              key={category._id}
              category={category}
              handleUpdateCategory={handleUpdateCategory}
              handleDeleteCategory={handleDeleteCategory}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CategoryList;
