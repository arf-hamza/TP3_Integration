"use client";

import React, { useState, useEffect } from "react";
import {
  APICategory,
  getApiCategory,
  postApiCategory,
  putApiCategory,
  deleteApiCategory,
} from "@/api/category.api";
import { Box, Typography, Button, Grid, Pagination } from "@mui/material";
import MyCardCategory from "@/components/molecules/card-category/my-card";

export interface CategoryListProps {
  categories: APICategory[];
}

const CategoryList = (props: CategoryListProps) => {
  const [categories, setCategories] = useState<APICategory[]>(props.categories);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 8;

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
        _id: "",
        name: "Nouvelle catégorie",
      };
      await postApiCategory(category);
      fetchCategories();
      const totalPages = Math.ceil((categories.length + 1) / categoriesPerPage);
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const indexOfLastCategories = currentPage * categoriesPerPage;
  const indexOfFirstCategories = indexOfLastCategories - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategories,
    indexOfLastCategories
  );

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "10vh",
          padding: "20px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Typography color="white" variant="h4">
          Liste des catégories
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            marginBottom: 5,
            width: "100%",
          }}
        ></Box>
        <Button
          variant="contained"
          onClick={handleAddCategory}
          href="/categories/new"
          sx={{
            ":hover": {
              bgcolor: "lightgray",
              color: "black",
            },
            backgroundColor: "#333",
            padding: 1,
            width: "50%",
          }}
        >
          Ajouter une categorie
        </Button>
      </Box>
      <Box mt={2} sx={{ backgroundColor: "black" }}>
        <Grid container spacing={6} padding={5}>
          {currentCategories.map((category) => (
            <MyCardCategory
              key={category._id}
              category={category}
              handleUpdateCategory={handleUpdateCategory}
              handleDeleteCategory={handleDeleteCategory}
            />
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Pagination
            className="white-pagination"
            count={Math.ceil(categories.length / categoriesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryList;
