"use client";
import React, { useState, useEffect } from "react";
import {
    APIProduct,
    postApiProduct,
} from "@/api/product.api";
import {
    Box,
    Typography,
} from "@mui/material";
import ProductForm from "@/components/organisms/product-form/product-form";
import { useTranslations } from "next-intl";

const ProductPage = () => {
    const [products, setProducts] = useState<APIProduct[]>([]);
    const t = useTranslations();

    const handleAddProduct = async (newProduct: APIProduct) => {
        try {
            const product: APIProduct = {
                _id: "",
                title: newProduct.title,
                description: newProduct.description,
                price: newProduct.price,
                categoryId: newProduct.categoryId,
                userId: newProduct.userId,
                isSold: newProduct.isSold
            };
            await postApiProduct(product);
           } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error);
        }
    };

return (
    <Box sx={{ marginTop: "100px", textAlign: "center" }}>
    <Typography variant="h4" component="h1" gutterBottom>
    </Typography>
        <ProductForm
        id=""
        title=""
        onProductAction={handleAddProduct}
        />
  </Box>
);
};

export default ProductPage;