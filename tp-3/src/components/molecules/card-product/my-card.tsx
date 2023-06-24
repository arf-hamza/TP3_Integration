"use client"
import React from "react";
import { Typography, Button, Card, CardContent, Box, Grid } from "@mui/material";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface MyCardProductProps {
  product: Product;
  handleUpdateProduct: (productId: string) => void;
  handleDeleteProduct: (productId: string) => void;
}

const MyCardProduct: React.FC<MyCardProductProps> = ({
  product,
  handleUpdateProduct,
  handleDeleteProduct,
}) => {
  return (
    <Grid item key={product.id} xs={6}>
      <Card sx={{ margin: "16px", backgroundColor: "darkgray" }}>
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="body2">Prix : {product.price} €</Typography>
          <Box mt={2} display="flex" justifyContent="end">
            <Button
              variant="contained"
              color="inherit"
              onClick={() => handleUpdateProduct(product.id)}
            >
              Modifier
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteProduct(product.id)}
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
