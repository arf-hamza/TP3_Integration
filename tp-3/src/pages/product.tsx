"use client";

import React, { useEffect, useState } from "react";
import "../app/globals.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import {
  getApiProducts,
  postApiProduct,
  putApiProduct,
  deleteApiProduct,
} from "../api/product.api";
import MyMenu from "@/components/molecules/my-menu/my-menu";
import MyCardProduct from "../components/molecules/card-product/my-card";
import generateUniqueId from "../../utils/generateUniqueId";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  userId: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Récupérer la liste des produits au chargement de la page
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

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteApiProduct(productId);
      // Actualiser la liste des produits après la suppression
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de la suppression du produit :", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const product = {
        id: generateUniqueId(),
        title: "Nouveau produit",
        description: "Description du nouveau produit",
        price: 10,
        categoryId: "1",
        userId: "1",
      };
      await postApiProduct(product);
      // Actualiser la liste des produits après l'ajout
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
    }
  };

  const handleUpdateProduct = async (productId: string) => {
    try {
      const product = {
        id: productId,
        title: "Produit modifié",
        description: "Description du produit modifié",
        price: 20,
        categoryId: "1",
        userId: "1",
      };
      await putApiProduct(productId, product);
      // Actualiser la liste des produits après la modification
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de la modification du produit :", error);
    }
  };

  return (
    <div>
      <MyMenu />
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <Typography color="white" variant="h4">
          Liste des produits
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Ajouter un produit
        </Button>
        <Grid container spacing={6}>
          {products.map((product) => (
            <MyCardProduct
              key={product.id}
              product={product}
              handleUpdateProduct={handleUpdateProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductPage;
