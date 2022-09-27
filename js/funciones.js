
const lista = document.getElementById("lista")
const listado = document.querySelector('#listado')
const nombreIngresar = document.querySelector("#nombreingresado")
const acordeIngresar = document.querySelector("#acordesingresados")
const URL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=rhcp` 
let info = []

const rhcpFetch = () => {
    fetch(URL)
    .then((response) => response.json())
    .then (data => info = data)
}
rhcpFetch();

function mostrarNombresRHCP() {
           const li = document.createElement('li')
            li.innerHTML = `
            <h3>${info.artists[0].strArtist}</h3>
            <p>${info.artists[0].strGenre}</p>
            <p>${info.artists[0].strBiographyEN}</p>
            `
            listado.append(li)
        }
    

function agregarCancionRhcp() {
    let input2 = document.querySelector("#nombreingresado").value
    let input3 = document.querySelector("#acordesingresados").value
    cancionesRHCP.push(new Cancion(input2, input3))
    localStorage.setItem("nuevascanciones", cancionesRHCP)

}

const sa = (mensaje, icono) => {
    Swal.fire({
        icon: icono,
        title: 'Acorde desafinado',
        text: mensaje,
      })
 }


function buscarCancionRhcp() {
    let input1 = document.querySelector("#nombrecancion").value
    const resultado = cancionesRHCP.find(Cancion => Cancion.nombre === input1)
    resultado ? li.innerText = resultado.acordes : sa("No se encuentra en la lista", 'error') 
}

