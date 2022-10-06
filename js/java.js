var validacion = false;


function compararCadenas() {

    do {
        var cadena1 = prompt("Introducir la primera cadena?");

        var arrayCadena1 = Array.from(cadena1);

        var cadena2 = prompt("Introducir la segunda cadena?");

        var arrayCadena2 = Array.from(cadena2);
    } while (cadena1==cadena2);

    arrayCadena1.sort();

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