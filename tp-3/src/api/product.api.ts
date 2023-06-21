

interface APIProduct {
  title: string;
  description: string;
  price: number;
  categoryId: string;
  userId: string;
  id: string; 
}

export async function getApiProducts() {
  try {
    const response = await fetch("https://tp-3-api.onrender.com/products");
    const jsonData = await response.json();

    // Extraction de l'ID pour chaque produit
    const productId = jsonData.map((product: APIProduct) => product.id);
    console.log("IDs des produits :", productId);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
  }
}

export async function postApiProduct(body: APIProduct) {
  try {
    const response = await fetch("https://tp-3-api.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const jsonData = await response.json();
    console.log("Réponse de l'API après l'ajout du produit :", jsonData);
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un produit :", error);
  }
}

export async function putApiProduct(id: string, body: APIProduct) {
  try {
    const response = await fetch(
      "https://tp-3-api.onrender.com/products/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const jsonData = await response.json();
    console.log("Réponse de l'API après la mise à jour du produit :", jsonData);
  } catch (error) {
    console.error("Erreur lors de la mise à jour d'un produit :", error);
  }
}

export async function deleteApiProduct(id: string) {
  try {
    const response = await fetch(
      "https://tp-3-api.onrender.com/products/" + id,
      {
        method: "DELETE",
      }
    );
    const jsonData = await response.json();
    console.log("Réponse de l'API après la suppression du produit :", jsonData);
  } catch (error) {
    console.error("Erreur lors de la suppression d'un produit :", error);
  }
}
