// ------CAMBIAR DE PANTALLA ------ //

const cambiarPantalla = (pantallaDestino) => {

    let arrayDeFases = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5"];//array de las pantallas.

    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));//quita de la array las pantalla seleccionada(las filtra).

    document.getElementById(pantallaDestino).style.display = "block";//muestra la pantalla seleccionada.

    for (let cadaPosicion of arrayDeFases) {
        document.getElementById(cadaPosicion).style.display = "none";//oculta las pantallas no seleccionadas.

    }
}
// ---- selección de coches ---- //

let arrayDeCoches = ["", ""]; //declara la array, sirve para elegir los dos coches.
let indice = 0;

function seleccionarCoche (coche) {
    arrayDeCoches[indice] = coche;
    document.getElementById("coche" +indice).src="./img/"+coche+".png";// añade la imagen a coche seleccionado .
    indice++;//suma uno al indicie.
    checkIndice();//revisa el indice  para ejecutar la carrera.
}

// ----- Función carrera ----- //

let MetrosRecorridosCoche0 = 0; //los metros por el cual empiezan los coches.
let MetrosRecorridosCoche1 = 0;
let MetrosARecorrer = 1000;//el numero de metros que tienen que recorrer.

function checkIndice() {
    if (indice == 2) {  //si el indice es igual a 2 comienza la carrera(ya se han elegido los dos coches).
        cambiarPantalla("pantalla4");
    let IntervaloDistancia = window.setInterval(function () {
     MetrosRecorridosCoche0 += Math.random() * (100 - 50) + 100;//genera un numero random para la suma de los metros recorridos de cada coche entre 50 o 100.
     MetrosRecorridosCoche1 += Math.random() * (100 - 50) + 100;

            if (MetrosRecorridosCoche0 >= MetrosARecorrer || MetrosRecorridosCoche1 >= MetrosARecorrer) {//si alguno de los dos coches a llegado a los kilometros recorridos.
                document.getElementById("botonResultado").style.display = "block";
                clearInterval(IntervaloDistancia);

                //aqui seria para saber cual de los dos coches gana la carrera.
                
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

function resetearJuego() {  //la función que resetea el juego que esta añadida en el html al ejecutar el boton resetear juego.
    indice = 0;
    MetrosRecorridosCoche0 = 0;
    MetrosRecorridosCoche1 = 0;
    cambiarPantalla("pantalla3");
    document.getElementById("botonResultado").style.display = "none";
}
