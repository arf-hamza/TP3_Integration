"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    TextField,
} from "@mui/material";
import { APICategory } from "@/api/category.api";
import { useTranslations } from "next-intl";

export interface CategoryFormProps {
    id?: string;
    name?: string;
    onCategoryAction: (category: APICategory) => void;
}

const CategoryForm = (props:CategoryFormProps) => {
    const [name, setName] = useState(props.name || "");
    const [successMessage, setSuccessMessage] = useState("");
    const t = useTranslations();

    const handleUpdateCategory = () => {
        const updatedCategory: APICategory = {
          _id: props.id || "",
          name: name,
        };
        props.onCategoryAction(updatedCategory);
        setSuccessMessage(t("category.modifyMessage"));
      };

    return (
        <form >
            <Box sx={{ marginTop: "70px", 
                        textAlign:"center",
                    }}>
                <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                <TextField
                    id="name"
                    label=""
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onClick={handleUpdateCategory}
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
        {successMessage && (
        <p style={{ color: "green" }}>{successMessage}</p>
        )}
        </form>
    );
}

export default CategoryForm;