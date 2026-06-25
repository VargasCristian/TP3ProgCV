const elementos = [
    { id: 1, titulo: "Lionel Messi", descripcion: "Considerado uno de los mejores futbolistas de la historia, campeon del mundo." },
    { id: 2, titulo: "Diego Maradona", descripcion: "Leyenda del futbol mundial, famoso por su talento y el gol del siglo." },
    { id: 3, titulo: "Cristiano Ronaldo", descripcion: "Goleador historico del futbol profesional, conocido por su potencia y disciplina." },
    { id: 4, titulo: "Pele", descripcion: "Icono brasilero del futbol, unico jugador en ganar tres copas del mundo." },
    { id: 5, titulo: "Johan Cruyff", descripcion: "Creador del futbol total, revoluciono el juego tanto como jugador y entrenador." },
    { id: 6, titulo: "Zinedine Zidane", descripcion: "Mediocampista frances de gran elegancia, campeon mundial y de clubes." }
];

const contenedor = document.getElementById('contenedor-tarjetas');

function renderizarTarjetas(datos) {
    contenedor.innerHTML = ''; 
    
    if (datos.length === 0) {
        contenedor.innerHTML = '<p>No hay elementos para mostrar.</p>';
        return;
    }

    for (let i = 0; i < datos.length; i++) {
        const item = datos[i];

        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        
        const titulo = document.createElement('h3');
        titulo.textContent = item.titulo;
        
        const desc = document.createElement('p');
        desc.textContent = item.descripcion;
        
        const idParrafo = document.createElement('small');
        idParrafo.textContent = 'ID: ' + item.id;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(desc);
        tarjeta.appendChild(idParrafo);

        contenedor.appendChild(tarjeta);
    }
}

renderizarTarjetas(elementos);
