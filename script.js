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

