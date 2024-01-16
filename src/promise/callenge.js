import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi)
};

// fetchData(`${API}/products`)
//     .then(response=> response.json())
//     .then(products => {
//         console.log(products)
//     })
//     .then(()=>{
//         console.log('hola')
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json()) //Aqui se trae todo lo que da la api y lo pone en formato json
    .then(products => {
        console.log(products[0])
        return fetchData(`${API}/products/${products[0].id}`) //Aqui toma el json y vuelve a hacer una consulta pero solo del primer id
    })
    .then(response => response.json()) //Vuelve a recibir toda la respuesta y la pone en json 
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`) // Ese json que es un producto lo toma para volver a hace una consulta pero de su categoria
    })
    .then(response => response.json()) //Toma la respuesta de la categoria y la pone en json
    .then(category => {
        console.log(category.name)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log("Finally")
    })