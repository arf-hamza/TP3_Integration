"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Grid, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";

export default function MyMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (language: string) => {
  };
  
  const isActivePage = (page: string) => {
    return window.location.pathname === page;
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#333",}}>
      <Container maxWidth="xl" sx={{ width: "100%", marginLeft: 0, marginRight: 0 }}>
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              color: isActivePage("/") ? "lightgray" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "lightgray"
              },
            }}
          >
            Accueil
          </Box>
          <Box
            component="a"
            href="/product"
            sx={{
              marginLeft: "20px",
              color: isActivePage("/product") ? "lightgray" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "lightgray",
              },
            }}
          >
            Produits
          </Box>
          <Box
            component="a"
            href="/category"
            sx={{
              marginLeft: "20px",
              color: isActivePage("/category") ? "lightgray" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "lightgray",
              },
            }}
          >
            Catégories
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleMobileMenu}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
           <Grid container spacing={1} alignItems="center" justifyContent="flex-end">
             <Grid item>
               <Button
                 color="primary"
                 variant="text"
                 onClick={() => changeLanguage("fr")}
                 sx={{ color: "white",  
                 "&:hover": {
                  color: "lightgray",
                }, }}
               >
                 Fr
               </Button>
             </Grid>
             <Grid item>
               <Button
                 color="primary"
                 variant="text"
                 onClick={() => changeLanguage("en")}
                 sx={{ color: "white",  
                 "&:hover": {
                  color: "lightgray",
                }, }}
               >
                 EN
               </Button>
             </Grid>
           </Grid>
        </Toolbar>
        {isMobileMenuOpen && (
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              backgroundColor: "#333",
              marginTop: "50px",
              padding: "10px",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              "&:hover": {
                color: "lightgray",
              },
            }}
          >
            <Box
              component="a"
              href="/"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                marginBottom: "10px",
                "&:hover": {
                  color: "lightgray",
                },
              }}
            >
            Accueil
            </Box>
            <Box
              component="a"
              href="/product"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                marginBottom: "10px",
                "&:hover": {
                  color: "lightgray",
                },
              }}
            >
            Produits
            </Box>
            <Box
              component="a"
              href="/category"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                "&:hover": {
                  color: "lightgray",
                },
              }}
            >
            Catégories
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}