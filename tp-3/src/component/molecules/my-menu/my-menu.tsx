"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

export default function MyMenu() {
  /* const changeLanguage = (language) => {
    console.log(`Langue sélectionnée : ${language}`);
  }; */

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#333" }}>
      <Container maxWidth="lg" sx={{ marginLeft: "0" }}>
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{ color: "white", textDecoration: "none" }}
          >
            Accueil
          </Box>
          <Box
            component="a"
            href="/product"
            sx={{ marginLeft: "20px", color: "white", textDecoration: "none" }}
          >
            Produits
          </Box>
          <Box
            component="a"
            href="/category"
            sx={{ marginLeft: "20px", color: "white", textDecoration: "none" }}
          >
            Catégories
          </Box>
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}

