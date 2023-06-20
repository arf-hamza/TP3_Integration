export async function getApiProducts() {
  const response = await fetch("https://tp-3-api.onrender.com/products");
  const jsonData = await response.json();
  console.log(jsonData);
}



export async function postApiProduct() {
  const response = await fetch("https://tp-3-api.onrender.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "",
      description: "",
      price: "",
      categoryId: "",
      userId: "",
    }),
  });
  const jsonData = await response.json();
  console.log(jsonData);
}

export async function putApiProduct(id) {
  const response = await fetch("https://tp-3-api.onrender.com/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "",
      description: "",
      price: "",
      categoryId: "",
      userId: "",
    }),
  });
  const jsonData = await response.json();
  console.log(jsonData);
}

export async function deleteApiProduct(id) {
  const response = await fetch("https://tp-3-api.onrender.com/products/" + id, {
    method: "DELETE",
  });
  const jsonData = await response.json();
  console.log(jsonData);
}

