import React, { useState } from "react";
import { Box, Button, Grid, Select, MenuItem, TextField } from "@mui/material";
import { APIProduct } from "@/api/product.api";
import { useTranslations } from "next-intl";

export interface ProductFormProps {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  categoryId?: string;
  isSold?: boolean;
  onProductAction: (product: APIProduct) => void;
}

const ProductForm = (props: ProductFormProps) => {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [price, setPrice] = useState(props.price || 0);
  const [isSold, setIsSold] = useState(props.isSold || false);
  //const [categoryId, setCategorie] = useState(props.categoryId || "");
  const [categoryId, setCategorie] = useState(props.categoryId || "");

  const [successMessage, setSuccessMessage] = useState("");
  const t = useTranslations();

  const handleUpdateProduct = () => {
    const updatedProduct: APIProduct = {
      _id: props.id || "",
      title: title,
      description: description,
      price: price,
      categoryId: categoryId || "",
      isSold: isSold,
    };
    props.onProductAction(updatedProduct);
    setSuccessMessage(t("product.modifyMessage"));
  };

  return (
    <form>
      <Box sx={{ marginTop: "70px", textAlign: "center" }}>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
            id="title"
            label=""
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              padding: "5px",
              fontSize: "16px",
            }}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white",
                border: "1px solid gray",
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
            id="description"
            label=""
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              padding: "5px",
              fontSize: "16px",
            }}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white",
                border: "1px solid gray",
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
            id="price"
            label=""
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            style={{
              width: "80%",
              height: "40px",
              padding: "5px",
              fontSize: "16px",
            }}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white",
                border: "1px solid gray",
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <Select
            id="isSold"
            value={isSold}
            onChange={(e) => setIsSold(e.target.value === "true")}
            style={{
              width: "80%",
              height: "40px",
              padding: "5px",
              fontSize: "16px",
              backgroundColor: "black",
              color: "white",
              border: "1px solid gray",
            }}
          >
          
            <MenuItem value="false">Non</MenuItem>
            <MenuItem value="true">Oui</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
          id="categoryId"
          label=""
          variant="outlined"
          value={categoryId}
          onChange={(e) => setCategorie(e.target.value)}
          style={{
            width: "80%",
            height: "40px",
            padding: "5px",
            fontSize: "16px",
          }}
          InputProps={{
            style: {
              backgroundColor: "black",
              color: "white",
              border: "1px solid gray",
            },
          }}
        />
        </Grid>
        <Box sx={{ marginTop: "70px" }}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleUpdateProduct}
            style={{
              backgroundColor: "gray",
              color: "white",
              borderRadius: "0",
              width: "200px",
            }}
          >
            {t("product.saveButton")}
          </Button>
          <Button
            variant="contained"
            color="error"
            href="/products"
            style={{
              backgroundColor: "white",
              color: "gray",
              borderRadius: "0",
              width: "200px",
            }}
          >
            {t("product.cancelButton")}
          </Button>
        </Box>
      </Box>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default ProductForm;
