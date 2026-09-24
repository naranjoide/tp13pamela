/*
 * REGISTRAR UNA MÁQUINA
 */
function registrarMaquina() {

    // Obtener los datos ingresados
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let horas = document.getElementById("horas").value;

    // Verificar que el nombre no esté vacío
    if (nombre.trim() === "") {

        alert("Por favor, ingresá el nombre de la máquina.");

        return;
    }

    // Mostrar los datos en la consola
    console.log("Nombre de la máquina:", nombre);
    console.log("Tipo de máquina:", tipo);
    console.log("Horas de uso acumuladas:", horas);

    // Mostrar los datos dentro del div
    document.getElementById("mostrarNombre").textContent = nombre;
    document.getElementById("mostrarTipo").textContent = tipo;
    document.getElementById("mostrarHoras").textContent = horas + " horas";

    // Hacer visible el div
    document.getElementById("registro").style.display = "block";
}


/*
 * BORRAR EL REGISTRO
 */
function borrarRegistro() {

    // Eliminar el contenido mostrado
    document.getElementById("mostrarNombre").textContent = "";
    document.getElementById("mostrarTipo").textContent = "";
    document.getElementById("mostrarHoras").textContent = "";

    // Ocultar nuevamente el div
    document.getElementById("registro").style.display = "none";
}


/*
 * CAMBIAR DE PÁGINA
 */
function cambiarPagina(pagina) {

    window.location.href = pagina;
}