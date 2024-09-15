"use strict"


const contenedor = document.getElementById("contenedor")

fetch("https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Maestros/Divisas")
.then(resp=>resp.json())
.then(data=> {
        data.results.forEach(results=>{
                const cards = document.createElement('div');
                cards.className = 'cards';
                cards.innerHTML += `<h3>Codigo: ${results.codigo}</h3>
                                <h4>Denominacion: $${results.denominacion} </h4>`
                contenedor.appendChild(cards);                        
        })
})

