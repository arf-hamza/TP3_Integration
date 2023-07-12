"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Grid, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function MyMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const t = useTranslations();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathChangeLanguage = usePathname();
  
  const changeLanguage = (language: string) => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace(`${getCurrentLanguage()}`, `/${language}`);
    window.location.href = newUrl
  };
  
  const getCurrentLanguage = () =>{
    const segments = window.location.pathname.split('/')
    return segments[1]
  }
  
  const isActivePage = (page: string) => {
    return pathname === page;
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
            {t("menu.home")}
          </Box>
          <Box
            component="a"
            href="/products"
            sx={{
              marginLeft: "20px",
              color: isActivePage("/products") ? "lightgray" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "lightgray",
              },
            }}
          >
            {t("menu.product")}
          </Box>
          <Box
            component="a"
            href="/categories"
            sx={{
              marginLeft: "20px",
              color: isActivePage("/categories") ? "lightgray" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "lightgray",
              },
            }}
          >
            {t("menu.category")}
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
              textAlign: "center",
              padding: "10px",
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
            {t("menu.home")}
            </Box>
            <Box
              component="a"
              href="/products"
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
            {t("menu.product")}
            </Box>
            <Box
              component="a"
              href="/categories"
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
            {t("menu.category")}
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}