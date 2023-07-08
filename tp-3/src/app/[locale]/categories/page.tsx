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

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryPage;
