

export interface APICategory {
  id: string;
  name: string;
}

export async function getApiCategory() {
  try {
    const response = await fetch("https://tp-3-api.onrender.com/categories");
    const jsonData = await response.json();

    // Extraction des catégories
    const categories = jsonData.map((category: APICategory) => ({
      id: category.id,
      name: category.name,
    }));

    return categories;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    throw error; // Vous pouvez choisir de rejeter l'erreur ou de la gérer différemment selon vos besoins
  }
}


export async function postApiCategory(body: APICategory) {
  try {
    const response = await fetch("https://tp-3-api.onrender.com/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const jsonData = await response.json();
    console.log("Réponse de l'API après l'ajout :", jsonData);
  } catch (error) {
    console.error("Erreur lors de l'ajout d'une catégorie :", error);
  }
}

export async function putApiCategory(id: string, body: APICategory) {
  try {
    const response = await fetch(
      "https://tp-3-api.onrender.com/categories/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const jsonData = await response.json();
    console.log("Réponse de l'API après la mise à jour :", jsonData);
  } catch (error) {
    console.error("Erreur lors de la mise à jour d'une catégorie :", error);
  }
}

export async function deleteApiCategory(id: string) {
  try {
    const response = await fetch(
      "https://tp-3-api.onrender.com/categories/" + id,
      {
        method: "DELETE",
      }
    );
    const jsonData = await response.json();
    console.log("Réponse de l'API après la suppression :", jsonData);
  } catch (error) {
    console.error("Erreur lors de la suppression d'une catégorie :", error);
  }
}
