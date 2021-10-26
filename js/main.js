// ------CAMBIAR DE PANTALLA ------ //

const cambiarPantalla = (pantallaDestino) => {

    let arrayDeFases = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5"];

    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        document.getElementById(cadaPosicion).style.display = "none";

    }
}
// ---- selección de coches ---- //

let arrayDeCoches = ["", ""];
let indice = 0;

function seleccionarCoche (coche) {
    arrayDeCoches[indice] = coche;
    document.getElementById("coche" +indice).src="./img/"+coche+".png";
    indice++;
    checkIndice();
}

// ----- Función carrera ----- //

let MetrosRecorridosCoche0 = 0;
let MetrosRecorridosCoche1 = 0;
let MetrosARecorrer = 1000;

function checkIndice() {
    if (indice == 2) {  
        cambiarPantalla("pantalla4");
    let IntervaloDistancia = window.setInterval(function () {
     MetrosRecorridosCoche0 += Math.random() * (100 - 50) + 100;
     MetrosRecorridosCoche1 += Math.random() * (100 - 50) + 100;
            if (MetrosRecorridosCoche0 >= MetrosARecorrer || MetrosRecorridosCoche1 >= MetrosARecorrer) {
                document.getElementById("botonResultado").style.display = "block";
                clearInterval(IntervaloDistancia);
             if (MetrosRecorridosCoche0 < MetrosRecorridosCoche1) {
                   document.getElementById("CocheGanador").src = "img/" + arrayDeCoches[1] + ".png";
                }
             else {
                  document.getElementById("CocheGanador").src = "img/" + arrayDeCoches[0] + ".png";
                }
            }   
     document.getElementById("contadorCoche0").innerHTML = "Metros recorridos: " + MetrosRecorridosCoche0.toFixed(2);
    document.getElementById("contadorCoche1").innerHTML = "Metros recorridos: " + MetrosRecorridosCoche1.toFixed(2);
        }, 900);
    }
}

// -----reseteo del juego ----- //

function resetearJuego() {
    indice = 0;
    MetrosRecorridosCoche0 = 0;
    MetrosRecorridosCoche1 = 0;
    cambiarPantalla("pantalla3");
    document.getElementById("botonResultado").style.display = "none";
}
