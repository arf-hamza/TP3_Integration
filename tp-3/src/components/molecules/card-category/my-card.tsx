"use client"
import React from "react";
import { Card, CardContent, Typography, Button, Box, Grid } from "@mui/material";
import { APICategory } from "../../../api/category.api";

interface MyCardCategoryProps {
  category: APICategory;
  handleUpdateCategory: (category: APICategory) => void;
  handleDeleteCategory: (categoryId: string) => void;
}

export default function MyCardCategory({
  category,
  handleUpdateCategory,
  handleDeleteCategory,
}: MyCardCategoryProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" sx={{ backgroundColor: "darkgrey" }}>
        <CardContent>
          <Typography variant="h6" component="div">
            ID: {category._id}
          </Typography>
          <Typography variant="subtitle1">{category.name}</Typography>
          <Box mt={2} display="flex" justifyContent="end">
            <Button
              variant="contained"
              color="inherit"
              onClick={() => handleUpdateCategory(category)}
            >
              Modifier
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteCategory(category._id)}
            >
              Supprimer
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

