"use client";
import React, { useState, useEffect } from "react";
import { APIProduct, getProductById, putApiProduct } from "@/api/product.api";
import { Box, Typography } from "@mui/material";
import ProductForm from "@/components/organisms/product-form/product-form";
import { useTranslations } from "next-intl";

export interface DetailProductPageProps {
  params: {
    id: string;
  };
}

const DetailProductPage = (props: DetailProductPageProps) => {
  const [product, setProduct] = useState<APIProduct | undefined>();
  const id = props.params.id;
  const t = useTranslations();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(id);
      setProduct(response);
    } catch (error) {
      console.error("Erreur lors de la récupération du produit :", error);
    }
  };

  const handleUpdateProduct = async (updatedProduct: APIProduct) => {
    try {
      await putApiProduct(updatedProduct._id, updatedProduct);
      console.log("Produit mis à jour avec succès");
      setProduct(updatedProduct);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit :", error);
    }
  };

  return (
    <Box sx={{ marginTop: "100px", textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t("product.modifyTitle")}
      </Typography>
      {product && (
        <ProductForm
          id={product._id}
          title={product.title}
          description={product.description}
          price={product.price}
          categoryId={product.categoryId}
          onProductAction={handleUpdateProduct}
        />
      )}
    </Box>
  );
};

export default DetailProductPage;
