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

//4. Funcion para pintar los datos de llegada
function pintarPersonajes(datos){

    let fila = document.getElementById("fila");
    //Este elemento nos permite recorrer la información del arreglo de JS
    datos.map(function(personajes){

        let columna = document.createElement("div");
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = personajes.foto;

        let tarjetaCuerpo = document.createElement("div");
        tarjetaCuerpo.classList.add("card-body");

        let nombre = document.createElement("h3");
        nombre.classList.add("text-center");
        nombre.textContent = personajes.nombre;

        let descripcion = document.createElement("p");
        descripcion.classList.add("text-center");
        descripcion.textContent = personajes.descripcion;

        //Se definen los hijos de los elementos previamente creados
        tarjetaCuerpo.appendChild(nombre);
        tarjetaCuerpo.appendChild(descripcion);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(tarjetaCuerpo);

        columna.appendChild(tarjeta);

        fila.appendChild(columna);
    });
}