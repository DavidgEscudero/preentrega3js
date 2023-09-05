function storeData() {
    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    // Crear objeto JSON
    let person = {
        nombre: nombre,
        edad: edad
    };

    // Convertir objeto a cadena JSON y almacenar en localStorage
    localStorage.setItem('person', JSON.stringify(person));
}

function retrieveData() {
    // Recuperar cadena JSON desde localStorage
    let storedData = localStorage.getItem('person');
    
    if(storedData) {
        // Convertir cadena JSON a objeto
        let person = JSON.parse(storedData);

        // Mostrar los datos recuperados
        let output = document.getElementById("output");
        output.innerHTML = `Nombre: ${person.nombre} <br> Edad: ${person.edad}`;
    } else {
        alert("No hay datos almacenados.");
    }
}
