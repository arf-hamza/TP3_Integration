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
    console.log(`Langue sélectionnée : ${language}`);
  };
  

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#333",}}>
      <Container maxWidth="xl" sx={{ width: "100%", marginLeft: 0, marginRight: 0 }}>
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              color: isMobileMenuOpen ? "white" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "gray",
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
              color: isMobileMenuOpen ? "white" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "gray",
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
              color: isMobileMenuOpen ? "white" : "white",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              "&:hover": {
                color: "gray",
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
                  color: "gray",
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
                  color: "gray",
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
                color: "gray",
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
                  color: "gray",
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
                  color: "gray",
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
                  color: "gray",
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


// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import { Box, Button, Grid } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";

// export default function MyMenu() {
//   /* const changeLanguage = (language) => {
//     console.log(`Langue sélectionnée : ${language}`);
//   }; */

//   return (
//     <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#333" }}>
//       <Container maxWidth="lg" sx={{ marginLeft: "0" }}>
//         <Toolbar disableGutters>
//           <Box
//             component="a"
//             href="/"
//             sx={{ color: "white", textDecoration: "none" }}
//           >
//             Accueil
//           </Box>
//           <Box
//             component="a"
//             href="/product"
//             sx={{ marginLeft: "20px", color: "white", textDecoration: "none" }}
//           >
//             Produits
//           </Box>
//           <Box
//             component="a"
//             href="/category"
//             sx={{ marginLeft: "20px", color: "white", textDecoration: "none" }}
//           >
//             Catégories
//           </Box>
//           {/* <Grid container spacing={1} alignItems="center" justifyContent="flex-end">
//             <Grid item>
//               <Button
//                 color="primary"
//                 variant="text"
//                 onClick={() => changeLanguage("fr")}
//               >
//                 Fr
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button
//                 color="primary"
//                 variant="text"
//                 onClick={() => changeLanguage("en")}
//               >
//                 Ang
//               </Button>
//             </Grid>
//           </Grid> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
