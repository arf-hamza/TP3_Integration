"use client";
import React, { useState, useEffect } from "react";
import MyMenu from "@/components/molecules/my-menu/my-menu";
import "../app/globals.css";
import {
    postApiCategory,
} from "../../../api/category.api";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { APICategory } from "../../../api/category.api";
import { useRouter } from "next/router";

const CategoryPage = () => {
    const [categories, setCategories] = useState<APICategory[]>([]);
    const router = useRouter();

    const handleAddCategory = async () => {
        try {
            const category: APICategory = {
                _id: "",
                name: "Nouvelle catégorie",
            };
            await postApiCategory(category);
           } catch (error) {
            console.error("Erreur lors de l'ajout de la catégorie :", error);
        }
    };

return (
    <Box sx={{ textAlign:"center"}}>
        <MyMenu />
        <Box sx={{ marginTop: "100px" }}>
            <Typography variant="h3" align="center">
            Nouvelle Catégorie
            </Typography>
        </Box>
        <Box sx={{ marginTop: "70px" }}>  
            <input
                type="text"
                placeholder="Nouvelle catégorie"
                style={{
                width: "50%",
                height: "40px",
                padding: "10px",
                fontSize: "16px",
                backgroundColor: "black",
                borderColor: "gray",
                color: "white",
                }}
            />
        </Box>    

        <Box sx={{ marginTop: "70px" }}>
            <Button
                variant="contained"
                color="inherit"
                onClick={handleAddCategory}
                style={{
                    backgroundColor: "gray",
                    color: "white",
                    borderRadius: "0",
                    width: "200px",
                  }}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => router.push("/category")}
                style={{
                    backgroundColor: "white",
                    color: "gray",
                    borderRadius: "0",
                    width: "200px",
                  }}
            >
                Cancel
            </Button>
        </Box>
    </Box>
);
};

export default CategoryPage;
