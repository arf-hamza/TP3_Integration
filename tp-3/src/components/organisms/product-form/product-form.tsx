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

const inputStyle = {
  // textField styles
  '& .MuiInputBase-root': {color: '#FFFFFF'},                             // text
  '& .MuiFormLabel-root': {color: '#999999'},                             // label
  '& .MuiFormLabel-root.Mui-focused': {color: '#FFFFFF'},                 // label (focused)
  '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999999', },  // outline
  '&:hover fieldset': {borderColor: '#CCCCCC',},                          // outline (hover)
  '&.Mui-focused fieldset': {borderColor: '#FFFFFF'}},                    // outline (focused)
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
            label={t('product.form.name')}
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              margin: "5px",
              fontSize: "16px",
            }}
            sx={inputStyle}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white"
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
            id="description"
            label={t('product.form.description')}
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              margin: "5px",
              fontSize: "16px",
            }}
            sx={inputStyle}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white"
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
            id="price"
            label={t('product.form.price')}
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            style={{
              width: "80%",
              height: "40px",
              margin: "5px",
              fontSize: "16px",
            }}
            sx={inputStyle}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white"
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <Select
            id="isSold"
            value={isSold}
            label="" /* {t('product.form.isSold')} */
            onChange={(e) => setIsSold(e.target.value === "true")}
            style={{
              width: "80%",
              height: "40px",
              margin: "5px",
              fontSize: "16px",
              backgroundColor: "black",
              color: "white",
              border: "1px solid gray",
            }}
            sx={inputStyle}
          >
            <MenuItem value="false">{t('product.form.notSold')}</MenuItem>
            <MenuItem value="true">{t('product.form.sold')}</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <TextField
            id="categoryId"
            label={t('product.form.categoryId')}
            variant="outlined"
            value={categoryId}
            onChange={(e) => setCategorie(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              margin: "5px",
              fontSize: "16px",
            }}
            sx={inputStyle}
            InputProps={{
              style: {
                backgroundColor: "black",
                color: "white"
              },
            }}
          />
        </Grid>
        <Box sx={{ marginTop: "70px" }}>
          <Button
            variant="contained"
            color="error"
            href="/products"
            style={{
              backgroundColor: "gray",
              color: "white",
              borderRadius: "0",
              width: "200px",
            }}
          >
            {t("product.cancelButton")}
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleUpdateProduct}
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "0",
              width: "200px",
            }}
          >
            {t("product.saveButton")}
          </Button>
        </Box>
      </Box>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default ProductForm;
