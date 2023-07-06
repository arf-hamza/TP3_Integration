"use client";

import React, { useState, useEffect } from "react";

import {
    APIProduct,
  postApiProduct,
  putApiProduct,
  deleteApiProduct,
  getApiProducts,
} from "@/api/product.api";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MyCardProduct from "@/components/molecules/card-product/my-card";

export interface ProductListProps {
  products: APIProduct[];
}
const ProductList = (props: ProductListProps) => {
  const [products, setProducts] = useState<APIProduct[]>(props.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getApiProducts();
      setProducts(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des Produits :", error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteApiProduct(productId);
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de la suppression de Produit :", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const product: APIProduct = {
          _id: "",
          title: "Nouveaux Produits",
          description: "Nouveaux Produits",
          price: 0,
          categoryId: "",
          userId: "",
          isSold: false
      };
      await postApiProduct(product);
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de l'ajout de Produit :", error);
    }
  };

  const handleUpdateProduct = async (productId: string) => {
    try {
      const updatedProduct: APIProduct = {
        title: "",
        description: "",
        price: 0,
        categoryId: "",
        userId: "",
        _id: "",
        isSold: false
      };
  
      await putApiProduct(productId, updatedProduct);
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de la modification de Produit :", error);
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
          Liste des Produits
        </Typography>
        <Button variant="contained" color="primary" onClick={() => {window.location.href = "/newProduct";}}>
          Ajouter un Produit
        </Button>
      </Box>
      <Box mt={2} sx={{ backgroundColor: "black" }} >
        <Grid container spacing={6} padding={5}>
          {products.map((product) => (
            
            <MyCardProduct
              key={product._id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
              handleUpdateProduct={handleUpdateProduct}
            />

          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;
