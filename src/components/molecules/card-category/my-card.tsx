"use client";
import React, { useTransition } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { APICategory } from "@/api/category.api";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();
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
              href={`/categories/${category._id}`}>
              {t('common.button.edit')}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteCategory(category._id)}
            >
              {t('common.button.delete')}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
