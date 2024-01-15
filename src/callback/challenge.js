const XMLHTTPrequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'; //Esta es la api que vamos a consumir

function fetchData(urlApi, callback){//Aqui el primer valor es constante y el segundo es la funcion que mandaremos llamar
    let xhttp = new XMLHTTPrequest(); // se hace una nueva para manejarla mas facil
    xhttp.open('GET', urlApi, true) //Que quieres hacer, la api, y true
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            //0 no se ha inicializado
            //1 loading
            //2 ya se ejecuto el valor send
            //3 interactuando
            //4 completada la llamada
            if (xhttp.status === 200){
                //200 solicitud correcta
                callback(null, JSON.parse(xhttp.responseText));
            }else {
                const error = new Error('Error ' + urlApi)
                return callback(error, null);
            }

        }
        
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1,data1){
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
        if (error2)return console.error(error2)
        fetchData(`${API}/categories/${data2?.category.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
})