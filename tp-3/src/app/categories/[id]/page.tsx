import React, { useState } from "react";
import MyMenu from "@/components/molecules/my-menu/my-menu";
import "../app/globals.css";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

interface CategoryPageProps {
    params: {
        _id: string;
    }
}

const CategoryPage = ({ params } : CategoryPageProps) => {
  const id = params._id;
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const handleUpdateCategory = async () => {
    try {
      // Perform your update logic here
      router.push("/category");
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie :", error);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <MyMenu />
      <Box sx={{ marginTop: "100px" }}>
        <Typography variant="h3" align="center">
          Modifier la Catégorie
        </Typography>
      </Box>
      <Box sx={{ marginTop: "70px" }}>
        <input
          type="text"
          placeholder="Catégorie"
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
          onClick={handleUpdateCategory}
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
