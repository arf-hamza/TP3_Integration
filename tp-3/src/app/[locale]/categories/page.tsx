"use client";

import React, { useState, useEffect } from "react";
import {
  getApiCategory,
  postApiCategory,
  putApiCategory,
  deleteApiCategory,
} from "@/api/category.api";
import { Box, Button, Grid } from "@mui/material";
import CategoryList from "@/components/organisms/category-list/category-list";
import Pagination from "@mui/material/Pagination";
import MyCardCategory from "@/components/molecules/card-category/my-card";

interface Category {
  _id: string;
  name: string;
}

const CategoryPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
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
      const category: Category = {
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

  const handleUpdateCategory = async (categoryId: string) => {
    try {
      const category = {
        _id: categoryId,
        name: "Nouvelle catégorie",
      };
      await putApiCategory(categoryId, category);
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
  const indexOfFirstCategries = indexOfLastCategories - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategries,
    indexOfLastCategories
  );

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginTop: 6,
            marginBottom: 3,
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={handleAddCategory}
            sx={{
              ":hover": {
                bgcolor: "lightgray",
                color: "black",
              },
              backgroundColor: "#333",
              padding: 1,
              width: "50%",
              marginBottom: "30px",
            }}
          >
            Ajouter un produit
          </Button>
        </Box>
        <Grid container spacing={6}>
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
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Pagination
            className="white-pagination"
            count={Math.ceil(categories.length / categoriesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </div>
  );
};

export default CategoryPage;
