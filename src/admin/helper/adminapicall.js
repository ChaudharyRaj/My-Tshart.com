import { API } from "../../backend";

// CREATE CATEGORY CALLS
export const createCategory = (userId,token,category)=>{

    return fetch(`${API}/category/create/${userId}`,{

        method: "POST",
        headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category) 
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err));
};


export const getCategories =() =>{
    return fetch(`${API}/categories`,{
        method: "GET"
    }).then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

// CREATE PRODUCT CALLS
export const createaProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: product
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

//GET ALL PRODUCTS

export const getProducts =() =>{
    
    return fetch(`${API}/products`,{
        method: "GET"
    }).then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

// DELETE PRODUCT

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

// GET PRODUCT
export const getProduct = productId =>{
    return fetch(`${API}/product/${productId}`,{
        method: "GET",
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

// UPDTE A PRODUCT
export const updateProduct = (productId,userId,token, product) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method: "PUT",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
    },
        body: product
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}