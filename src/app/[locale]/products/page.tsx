"use client";
import React, { useState, useEffect } from "react";
import { getApiProducts, APIProduct } from "@/api/product.api";
import ProductList from "@/components/organisms/product-list/product-list";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  userId: string;
  isSold: boolean;
  
}

const ProductPage = () => {
  const [products, setProducts] = useState<APIProduct[]>([]);

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

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;

