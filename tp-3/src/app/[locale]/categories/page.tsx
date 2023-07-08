"use client";

import React, { useState, useEffect } from "react";
import {
  getApiCategory,
  postApiCategory,
  putApiCategory,
  deleteApiCategory,
  APICategory,
} from "@/api/category.api";

import CategoryList from "@/components/organisms/category-list/category-list";

interface Category {
  _id: string;
  name: string;
}

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
      await putApiCategory(category._id, category);
      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie :", error);
    }
  };

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryPage;
