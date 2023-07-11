"use client"
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductForm from "@/components/organisms/product-form/product-form";
import { useTranslations } from "next-intl";
import {
  APIProduct,
  postApiProduct,
  getApiProducts,
} from "@/api/product.api";

const NewProductPage = () => {
  const [products, setProducts] = useState<APIProduct[]>([]);
  const t = useTranslations();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getApiProducts();
      setProducts(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
    }
  };

  const handleAddProduct = async (newProduct: APIProduct) => {
    try {
      const product: APIProduct = {
        _id: "",
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
        categoryId: newProduct.categoryId,
        isSold: newProduct.isSold,
      };
      await postApiProduct(product);
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
    }
  };

  return (
    <Box sx={{ marginTop: "100px", textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t("product.newmodifyTitle")}
      </Typography>
      <ProductForm
        id=""
        title=""
        description=""
        price={0}
        isSold={false}
        onProductAction={handleAddProduct}
      />
    </Box>
  );
};

export default NewProductPage;
