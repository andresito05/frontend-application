const API_URL = "http://localhost:3000/api/products";

export const  getAllJuegosya = async () => { 
    const response = await fetch(API_URL); 
    return response.json(); 
};   

//obtener productos por ID 
export const getJuegosyaById = async (id) => {
    const response = await fetch(`}${API_URL}/${id}`);
    return response.json(); 
}; 

// Crear un producto 
export const createJuegosya = async (product) => {
const response = await fetch(API_URL, {
    method: "POST",
    headers: { "content-type": "application/json"},
    body: JSON.stringify(product) 
});
return response.json();
};

//Actualizar un producto 
export const updateJuegosya  = async (id, product) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(product) 
    });
    return response.json();
    };

    //Borra un producto 
    export const deleteJuegosya  = async (id) => {
        return fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        };