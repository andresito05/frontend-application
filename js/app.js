// importar metodos del api.js 
import { getAllJuegosya, getJuegosyaById, updateJuegosya, deleteJuegosya } from "./api";

document.addEventListener("DOMContentLoaded",async () => {
    const productlist = document.getElementById("product-list");

    const product = await getAllJuegosya();
    productlist.innerHTML = product.map(product => `
     <div class ="col-xs-12 col-sm-6 col-md-3 card">
      
       <div class="card-body d-flex flex-column justify-content-end">
        <h5 class="card-title">${product.name}</h5>
        <p class"card-text">${product.price}</p>
        <a onclick="viewProducts(${product.id})" class="btn btn-primary">Ver mas</a>
        </div>
        </div>
    `).join(""); 
});

//Metodo para ver los detalles del prodcuto cuando damos clic en el boton ver mas  
window.viewProduct = async (id) => {
    const product = await getJuegosyaById(id); 

    const productDetails = `
    <div class="col">

        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <p>${product.genre}</p>
        <button class=" btn btn-warning" onclik="enablEdit(${product.id})">Editar</button>
        <button class=" btn btn-danger" onclik="deleteProduct(${product.id})">Eliminar</button>
    </div> 
    `;
    document.getElementById("product-list").innerHTML = productDetails;
}; 

// vista para editar la informacion 

window.enableEdit = async (id) => {
    const product = await getJuegosyaById(id); 

    const editForm = `
        <div class="row gap-3">
            <input type="text" id="name" values="${product.name}">
            <textarea id="description">${product.description}</textarea>
            <input type="number" id="price" value=${product.price}">
            <button class="btn btn-success" onclik="saveEdit(${id})
            <input type="text" id="gnere" values="${product.genre}">
            ">Guardar</button>
        </div> 

    `;
    document.getElementById("product-list").innerHTML = editForm;
};

//Guardar la informacion actualizada 
window.saveEdit = async (id) => {
    const updateJuegos = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value),
        genre: document.getElementById("genre").value,
    };
    await updateJuegosya(id, updateJuegos);
    location.reload(); //recarga la pagina para ver los cambios 
};  

//Borrar el producto seleccionado 
window.deleteJuegosya = async (id) => { 
    await deleteJuegosya(id);
    location.reload();//
}