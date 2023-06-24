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
import generateUniqueId from "../../utils/generateUniqueId";
import { APICategory } from "../api/category.api";


const CategoryPage = () => {
  const [categories, setCategories] = useState<APICategory[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

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
        _id: generateUniqueId(),
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
      await putApiCategory(category._id, category);
      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie :", error);
    }
  };

  return (
    <Box>
      <MyMenu />
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
        <Button variant="contained" color="primary" onClick={handleAddCategory}>
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

export default CategoryPage;
