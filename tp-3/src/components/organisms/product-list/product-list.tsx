
import React, { useState, useEffect } from "react";
import {
  APIProduct,
  postApiProduct,
  putApiProduct,
  deleteApiProduct,
  getApiProducts,
} from "@/api/product.api";
import { Box, Typography, Button, Grid, Pagination } from "@mui/material";
import MyCardProduct from "@/components/molecules/card-product/my-card";
import ModalConfirmation from "@/components/molecules/modal/modal-confirmation";
import { useTranslations } from "next-intl";

export interface ProductListProps {
  products: APIProduct[];
}

const ProductList = (props: ProductListProps) => {
  const [products, setProducts] = useState<APIProduct[]>(props.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("");
  const t = useTranslations();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getApiProducts();
      setProducts(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteApiProduct(productId);
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de la suppression de Produit :", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const product: APIProduct = {
        _id: "",
        title: "Nouveaux Produits",
        description: "Nouveaux Produits",
        price: 0,
        categoryId: "",
        isSold: false,
      };
      await postApiProduct(product);
      await fetchProducts(); // Rechargement de la liste des produits
    } catch (error) {
      console.error("Erreur lors de l'ajout de Produit :", error);
    }
  };
  
  const handleUpdateProduct = async (productId: string) => {
    try {
      const updatedProduct: APIProduct = {
        title: "",
        description: "",
        price: 0,
        categoryId: "",
        _id: "",
        isSold: false,
      };
  
      await putApiProduct(productId, updatedProduct);
      await fetchProducts(); // Rechargement de la liste des produits
    } catch (error) {
      console.error("Erreur lors de la modification de Produit :", error);
    }
  };
  
  

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const openDeleteDialog = (productId: string) => {
    setIsDeleteDialogOpen(true);
    setSelectedProductId(productId);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedProductId("");
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "10vh",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <Typography color="white" variant="h4">
          Liste des Produits
        </Typography>
        <Button
          variant="contained"
          onClick={handleAddProduct}
          href="/products/new"
          sx={{
           ":hover": {
              bgcolor: "lightgray",
              color: "black",
            },
            backgroundColor: "#333",
            padding: 1,
            width: "50%",
            marginBottom: "30px",
          }}
        >
          Ajouter un produit
        </Button>
      </Box>
      <Box mt={2} sx={{ backgroundColor: "black" }}>
        <Grid container spacing={6} padding={5}>
          {currentProducts.map((product) => (
            <React.Fragment key={product._id}>
              <MyCardProduct
                product={product}
                handleDeleteProduct={openDeleteDialog}
                handleUpdateProduct={handleUpdateProduct}
              />
              <ModalConfirmation
                isOpen={isDeleteDialogOpen}
                description={t("product.modal.description")}
                btnConfirmText={t("product.modal.btnConfirm")}
                btnCancelText={t("product.modal.btnCancel")}
                onConfirm={() => {
                  handleDeleteProduct(selectedProductId);
                  closeDeleteDialog();
                }}
                onClose={closeDeleteDialog}
              />
            </React.Fragment>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          className="white-pagination"
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default ProductList;
