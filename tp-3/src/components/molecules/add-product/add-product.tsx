"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const inputStyle = {
  "& .MuiInputBase-root": { color: "#FFFFFF" }, // text
  "& .MuiFormLabel-root": { color: "#999999" }, // label
  "& .MuiFormLabel-root.Mui-focused": { color: "#FFFFFF" }, // label (focused)
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#999999" }, // outline
    "&:hover fieldset": { borderColor: "#CCCCCC" }, // outline (hover)
    "&.Mui-focused fieldset": { borderColor: "#FFFFFF" },
  }, // outline (focused)
};

export default function AddProduct(/*props : ProductProps*/) {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <h1 style={{ color: "#ffffff", textAlign: "center" }}>
          Nouveau Produit
        </h1>
        <TextField
          fullWidth
          id="nom-produit"
          label="Nom du produit"
          variant="outlined"
          sx={inputStyle}
          required
        />
        <TextField
          fullWidth
          id="prix-produit"
          label="Prix du produit"
          variant="outlined"
          sx={inputStyle}
          required
        />
        <TextField
          fullWidth
          id="categorie-produit"
          label="Catégorie du produit"
          variant="outlined"
          sx={inputStyle}
        />
        <TextField
          fullWidth
          id="createur-produit"
          label="Créateur du produit"
          variant="outlined"
          sx={inputStyle}
        />
        <TextField
          fullWidth
          id="description-produit"
          label="Description du produit"
          variant="outlined"
          sx={inputStyle}
        />
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            <Button variant="outlined" color="error">
              ANNULER
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ffffff",
                color: "#000000",
                "&:hover": { bgcolor: "#dddddd" },
              }}
            >
              CONFIRMER
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}