"use client"
import React from "react";
import { Typography, Button, Card, CardContent, Box, Grid } from "@mui/material";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  isSold: boolean;
}

interface MyCardProductProps {
  product: Product;
  handleUpdateProduct: (productId: string) => void;
  handleDeleteProduct: (productId: string) => void;
}

const MyCardProduct = (props: MyCardProductProps) => {
  const { product, handleUpdateProduct, handleDeleteProduct } = props;

  return (
    <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ margin: "16px", backgroundColor: "darkgray" }}>
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="body2">Prix : {product.price} €</Typography>
          <Typography variant="body2">CategoryId : {product.categoryId}</Typography>
          <Typography variant="body2">isSold : {product.isSold ? "Yes" : "No"}</Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="inherit"
              href={`/products/${product._id}`}
            >
              Modifier
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteProduct(product._id)}
            >
              Supprimer
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MyCardProduct;
