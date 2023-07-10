import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { APICategory } from "@/api/category.api";
import { useTranslations } from "next-intl";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").max(55, "Maximum characters allowed: 55"),
});

export interface CategoryFormProps {
  id?: string;
  name?: string;
  onCategoryAction: (category: APICategory) => void;
}

const CategoryForm = (props: CategoryFormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState("");
  const t = useTranslations();

  const handleUpdateCategory = (data: any) => {
    const updatedCategory: APICategory = {
      _id: props.id || "",
      name: data.name,
    };
    props.onCategoryAction(updatedCategory);
    setSuccessMessage(t("category.modifyMessage"));
  };

  return (
    <form onSubmit={handleSubmit(handleUpdateCategory)}>
      <Box sx={{ marginTop: "70px", textAlign: "center" }}>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <Controller
            control={control}
            name="name"
            defaultValue={props.name || ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                label=""
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
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        <Box sx={{ marginTop: "70px" }}>
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
            {t("category.saveButton")}
          </Button>
          <Button
            variant="contained"
            color="error"
            href="/categories"
            style={{
              backgroundColor: "white",
              color: "gray",
              borderRadius: "0",
              width: "200px",
            }}
          >
            {t("category.cancelButton")}
          </Button>
        </Box>
      </Box>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default CategoryForm;