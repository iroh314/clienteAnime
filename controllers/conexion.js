//Receta para conectarnos con un API

//1. URL del servicio
let url = "https://localhost/apiSura/public/personajes";

//2. Armamos la peticion
let peticion={
    method:"GET"
}

//3. Llamamos al servidor
fetch(url,peticion)
.then(function(respuesta){
    return(respuesta.json())
})

.then(function(datos){
    console.log(datos)
})
