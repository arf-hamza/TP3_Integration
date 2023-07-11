import React, { useState } from "react";
import { Box, Button, Grid, Select, MenuItem, TextField } from "@mui/material";
import { APIProduct } from "@/api/product.api";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslations } from "next-intl";

const inputStyle = {
  // textField styles
  '& .MuiInputBase-root': {color: '#FFFFFF'},                             // text
  '& .MuiFormLabel-root': {color: '#999999'},                             // label
  '& .MuiFormLabel-root.Mui-focused': {color: '#FFFFFF'},                 // label (focused)
  '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999999', },  // outline
  '&:hover fieldset': {borderColor: '#CCCCCC',},                          // outline (hover)
  '&.Mui-focused fieldset': {borderColor: '#FFFFFF'}},                    // outline (focused)
  }

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
  const t = useTranslations();

  const schema = yup.object().shape({
    title: yup.string().required(t("validation.errors.title.required")).max(50, t("validation.errors.title.maxChar")),
    description: yup.string().required(t("validation.errors.description.required")).max(255, t("validation.errors.description.maxChar")),
    price: yup.number().required(t("validation.errors.price.required")).min(1, t("validation.errors.price.negativeValue")),
    categoryId: yup.string().required(t("validation.errors.categoryId.required")).max(100, t("validation.errors.categoryId.maxChar")),
  });

    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });

  const [successMessage, setSuccessMessage] = useState("");

  const handleUpdateProduct = (data: any) => {
    const updatedProduct: APIProduct = {
      _id: props.id || "",
      title: data.title,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
      isSold: props.isSold || false,
    };
    props.onProductAction(updatedProduct);
    setSuccessMessage(t("product.modifyMessage"));
  };

  return (
    <form onSubmit={handleSubmit(handleUpdateProduct)}>
      <Box sx={{ textAlign: "center" }}>
        <Grid item xs={12} sx={{ marginBottom: "36px" }}>
          <Controller
            control={control}
            name="title"
            defaultValue={props.title || ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="title"
                label={t('product.form.name')}
                variant="outlined"
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
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "36px" }}>
          <Controller
            control={control}
            name="description"
            defaultValue={props.description || ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="description"
                label={t('product.form.description')}
                variant="outlined"
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
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "36px" }}>
          <Controller
            control={control}
            name="price"
            defaultValue={props.price || 0}
            render={({ field }) => (
              <TextField
                {...field}
                id="price"
                label={t('product.form.price')}
                variant="outlined"
                type="number"
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
                error={Boolean(errors.price)}
                helperText={errors.price?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <Select
            id="isSold"
            value={props.isSold || false}
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
          <Controller
            control={control}
            name="categoryId"
            defaultValue={props.categoryId || ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="categoryId"
                label={t('product.form.categoryId')}
                variant="outlined"
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
                error={Boolean(errors.categoryId)}
                helperText={errors.categoryId?.message}
              />
            )}
          />
        </Grid>
        <Box sx={{ marginTop: "50px", marginBottom: "10px" }}>
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
            type="submit"
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