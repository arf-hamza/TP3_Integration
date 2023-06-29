

export interface APIProduct {
  title: string;
  description: string;
  price: number;
  categoryId: string;
  userId: string;
  _id: string; 
  isSold: boolean;
}

export async function getApiProducts(): Promise<APIProduct[]> {
  try {
    const response = await fetch("https://api-without-authorisation.onrender.com/products");
    const jsonData = await response.json();
    
    if (Array.isArray(jsonData)) {
      const products: APIProduct[] = jsonData.map((product: APIProduct) => ({
        _id: product._id,
        title: product.title,
        description: product.description,
        price: product.price,
        categoryId: product.categoryId,
        userId: product.userId,
        isSold: product.isSold,
      }));
  
      return products;
    } else {
      throw new Error("La réponse de l'API n'est pas un tableau valide.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return []; // Retourner une liste vide en cas d'erreur
  }
}


export async function postApiProduct(body: APIProduct) {
  try {
    const response = await fetch("https://api-without-authorisation.onrender.com/products", {
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
      "https://api-without-authorisation.onrender.com/products/" + id,
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
      "https://api-without-authorisation.onrender.com/products/" + id,
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
