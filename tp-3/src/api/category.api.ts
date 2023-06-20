

export async function getApiCategory() {
    const response = await fetch("https://tp-3-api.onrender.com/categories");
    const jsonData = await response.json();
    console.log(jsonData);
    }

export async function postApiCategory(){
    const response = await fetch("https://tp-3-api.onrender.com/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "",
        }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
}

export async function putApiCategory(id){
    const response = await fetch("https://tp-3-api.onrender.com/categories/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "",
        }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
}

export async function deleteApiCategory(id){
    const response = await fetch("https://tp-3-api.onrender.com/categories/" + id, {
        method: "DELETE",
      });
      const jsonData = await response.json();
      console.log(jsonData);
}