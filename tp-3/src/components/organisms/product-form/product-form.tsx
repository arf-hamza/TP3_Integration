import React, { useState } from "react";
import { Box, Button, Grid, Select, MenuItem, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { APIProduct } from "@/api/product.api";
import { useTranslations } from "next-intl";

const schema = yup.object().shape({
  title: yup.string().required("Title is required").max(5, "Maximum characters: 5"),
  description: yup.string().required("Description is required").max(6, "Maximum characters: 6"),
  price: yup.number().required("Price is required").positive("Price must be a positive number"),
  categoryId: yup.string().required("Category is required"),
});

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
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState("");
  const t = useTranslations();

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
      <Box sx={{ marginTop: "70px", textAlign: "center" }}>
        <Grid item xs={12} sx={{ marginBottom: "36px" }}>
          <Controller
            control={control}
            name="title"
            defaultValue={props.title || ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="title"
                label="title"
                variant="outlined"
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
                label="description"
                variant="outlined"
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
                label=""
                variant="outlined"
                type="number"
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
                error={Boolean(errors.price)}
                helperText={errors.price?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "36px" }}>
          <Controller
            control={control}
            name="categoryId"
            defaultValue={props.categoryId || ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="categoryId"
                label="Category Id"
                variant="outlined"
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
                error={Boolean(errors.categoryId)}
                helperText={errors.categoryId?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "36px" }}>
          <Select
            id="isSold"
            value={props.isSold || false}
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

        <Box sx={{ marginTop: "50px", marginBottom: "36px"}}>
          <Button
            variant="contained"
            color="inherit"
            type="submit"
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