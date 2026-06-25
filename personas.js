let personas = [];

const formulario = document.getElementById('formulario-persona');
const cuerpoTabla = document.getElementById('cuerpo-tabla');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const imc = peso / (altura * altura);

    const nuevaPersona = {
        id: Date.now(), 
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        altura: altura,
        peso: peso,
        imc: imc.toFixed(2) 
    };

    personas.push(nuevaPersona);

    actualizarTabla();

    formulario.reset();
});

function actualizarTabla() {
    
    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];

        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${persona.imc}</td>
            <td></td>
        `;

        cuerpoTabla.appendChild(fila);
    }
}
