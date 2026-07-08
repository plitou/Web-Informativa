// cotizar precios
const nivel = document.getElementById("nivel");
const precioFinal = document.getElementById("precioFinal");

function actualizarPrecio(){
    const precio = Number(nivel.value);

    precioFinal.innerHTML =
    "<strong>$" + precio.toLocaleString("es-CL") + " CLP</strong>";
}

if(nivel){
    nivel.addEventListener("change", actualizarPrecio);
}

const precioGrande = document.getElementById("precioGrande");
const descripcion = document.getElementById("descripcionPrecio");

function actualizarPrecio() {
    let precio = "";
    let texto = "";

    switch (nivel.value) {
        case "100000":
            precio = "$100.000 CLP";
            texto = "Ideal para pequeñas empresas y emprendimientos.";
            break;

        case "180000":
            precio = "$180.000 CLP";
            texto = "Recomendado para organizaciones con múltiples procesos.";
            break;

        case "300000":
            precio = "$300.000 CLP";
            texto = "Pensado para empresas que requieren una solución completa.";
            break;
    }

    precioGrande.textContent = precio;
    descripcion.textContent = texto;
}

if (nivel) {
    actualizarPrecio();
    nivel.addEventListener("change", actualizarPrecio);
}