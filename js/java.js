var validacion = false;


function compararCadenas() {

    var cadena1 = prompt("Introducir la primera cadena?");

    var arrayCadena1 = Array.from(cadena1);

    arrayCadena1.sort();

    var cadena2 = prompt("Introducir la segunda cadena?");

    var arrayCadena2 = Array.from(cadena2);

    arrayCadena2.sort();

    if (arrayCadena1.toString() == arrayCadena2.toString()) {
        validacion = true;
    } else {
        validacion = false;
    }
}

function lectura() {
    document.write(validacion);
}