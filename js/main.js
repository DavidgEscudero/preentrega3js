var simuladorData = [];

// Función para iniciar el simulador
function iniciarSimulador() {
    cargarSimuladorData();

    // Creacion de un objeto simulado
    var objetoSimulado = {
        propiedad1: 'valor1',
        propiedad2: 'valor2',
        propiedad3: 'valor3'
    };

    simuladorData.push(objetoSimulado); // Añadimos el objeto al array

    // Mostramos los objetos simulados en el DOM
    mostrarSimuladorData();
}

// Carga datos previos del simulador desde el Storage o desde JSON
function cargarSimuladorData() {
    // Comprobamos si existen datos almacenados en el Storage
    if (localStorage.simuladorData) {
        simuladorData = JSON.parse(localStorage.simuladorData); // Cargamos los datos desde el Storage
    } else {
        // Si no hay datos en el Storage, podemos cargarlos desde un JSON externo o crearlos manualmente
        // simuladorData = ... // Código para cargar datos desde JSON
    }
}

// Muestra los objetos simulados en el DOM
function mostrarSimuladorData() {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Limpiamos el contenido del div de salida

    // Recorremos el array de simuladorData para mostrar los objetos en el DOM
    simuladorData.forEach(function(objeto, indice) {
        var objetoDiv = document.createElement('div');
        objetoDiv.innerHTML = 'Objeto ' + (indice+1) + ': ' + JSON.stringify(objeto);
        outputDiv.appendChild(objetoDiv);
    });
}

// Guarda los datos del simulador en el Storage
function guardarSimuladorData() {
    localStorage.simuladorData = JSON.stringify(simuladorData);
}