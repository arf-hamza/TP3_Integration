"use client";

import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { APIProduct } from "@/api/product.api";
import { useTranslations } from "next-intl";

export interface ProductFormProps {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  categoryId: string;
  userId: string;
  isSold: boolean;
  onProductAction: (product: APIProduct) => void;
}

const inputStyle = {
  "& .MuiInputBase-root": { color: "#FFFFFF" }, // text
  "& .MuiFormLabel-root": { color: "#999999" }, // label
  "& .MuiFormLabel-root.Mui-focused": { color: "#FFFFFF" }, // label (focused)
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#999999" }, // outline
    "&:hover fieldset": { borderColor: "#CCCCCC" }, // outline (hover)
    "&.Mui-focused fieldset": { borderColor: "#FFFFFF" },
  }, // outline (focused)
};

const ProductForm = (props: ProductFormProps) => {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [price, setPrice] = useState(Number(props.price) || 0);
  const [categoryId, setCategoryId] = useState(props.categoryId || "");
  const [userId, setUserId] = useState(props.userId || "");
  const [isSold, setIsSold] = useState(props.isSold || false);
  const [successMessage, setSuccessMessage] = useState("");
  const t = useTranslations();

  const handleUpdateProduct = () => {
    const updatedProduct: APIProduct = {
      _id: props.id || "",
      title: title,
      description: description,
      price: price,
      categoryId: categoryId,
      userId: userId,
      isSold: false
    };
    props.onProductAction(updatedProduct);
    setSuccessMessage(t("product.modifyMessage"));
  };

  return (
    <form>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <h1 style={{ color: "#ffffff", textAlign: "center" }}>
          Nouveau Produit
        </h1>
        <TextField
          fullWidth
          id="nom-produit"
          label="Nom du produit"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={inputStyle}
          required
        />
        <TextField
          fullWidth
          id="prix-produit"
          label="Prix du produit"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          sx={inputStyle}
          required
        />
        <TextField
          fullWidth
          id="categorie-produit"
          label="Catégorie du produit"
          variant="outlined"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          sx={inputStyle}
        />
        <TextField
          fullWidth
          id="createur-produit"
          label="Créateur du produit"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          sx={inputStyle}
        />
        <TextField
          fullWidth
          id="description-produit"
          label="Description du produit"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={inputStyle}
        />
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            <Button variant="outlined" color="error" href="/products">
              ANNULER
            </Button>
            <Button
              variant="contained"
              onClick={handleUpdateProduct}
              sx={{
                bgcolor: "#ffffff",
                color: "#000000",
                "&:hover": { bgcolor: "#dddddd" },
              }}
            >
              CONFIRMER
            </Button>
          </Stack>
        </Box>
      </Stack>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default ProductForm;