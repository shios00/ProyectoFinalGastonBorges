
const lista = document.getElementById("lista")
const listado = document.querySelector('#listado')
const nombreIngresar = document.querySelector("#nombreingresado")
const acordeIngresar = document.querySelector("#acordesingresados")
const URL = `https://6348b8dea59874146b0f966c.mockapi.io/api/artistas` 
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
            <h3>${info[0].Nombre}</h3>
            <p>${info[0].Genero}</p>
            <p>${info[0].Informacion}</p>
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

