// Contador de caracteres para el mensaje que se encuentra en el formulario
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

if(mensaje){
    mensaje.addEventListener("input", function(){
        contador.textContent = mensaje.value.length + " / 550 caracteres";
    });
}


// Formulario
const formulario = document.getElementById("formulario");
if(formulario){
    formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let confirmar = confirm("¿Desea enviar el formulario?");
    alert("Formulario enviado correctamente.");

    if(confirmar){
        alert("formulario enviado correctamente.");
        formulario.reset();
        contador.textContent="0 / 550 caracteres";

    }
    });
}

// Boton para volver al inicio
const subir=document.getElementById("subir");
window.addEventListener("scroll",function(){
if(window.scrollY>300){
    subir.style.display="block";
    }else{
        subir.style.display="none";
    }
});
subir.addEventListener("click",function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
    });
});

// Validar fecha
const fecha = document.getElementById("fecha");

function validarFecha(){
    const hoy = new Date().toISOString().split("T")[0];

    if(fecha.value < hoy){
        alert("Debe seleccionar una fecha válida.");
        fecha.value="";
    }
}

// Boton ocultar bio
const btnBiografia = document.getElementById("btnBiografia");
const biografia = document.querySelector(".texto-biografia");

function cambiarBiografia() {

    if (biografia.style.display === "none") {
        biografia.style.display = "block";
        btnBiografia.textContent = "Ocultar Biografía";
    } else {
        biografia.style.display = "none";
        btnBiografia.textContent = "Mostrar Biografía";
    }

}

fecha.addEventListener("change", validarFecha);

// saludo de nombre
const nombre = document.getElementById("nombre");
const saludoUsuario = document.getElementById("saludoUsuario");

function actualizarSaludo() {

    if (nombre.value.trim() === "") {
        saludoUsuario.innerHTML = "Complete sus datos para solicitar una asesoría profesional.";
    } else {
        saludoUsuario.innerHTML =
            "<strong>Bienvenido(a), " +
            nombre.value +
            ".</strong><br>Estamos preparados para brindarle una solución tecnológica adaptada a sus necesidades.";
    }
}

nombre.addEventListener("input", actualizarSaludo);
actualizarSaludo();

