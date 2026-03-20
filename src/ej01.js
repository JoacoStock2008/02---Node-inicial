const textoEntrada01 = "Escuela", textoEntrada02 = "ORT";

let textoSalida = "";

console.clear();        // Borra la pantalla en la consola.

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);

const invertirPalabra = (array) => array.reverse();

function concatInvert(textoEntrada01, textoEntrada02) {

    let returnValue = '';

    let array1 = textoEntrada01.split('');
    let array2 = textoEntrada02.split('');
    let array1Invertido = invertirPalabra(array1)
    console.log(array1Invertido)
    let array2Invertido = invertirPalabra(array2)
    console.log(array2Invertido)

    returnValue = array2Invertido.join('') + array1Invertido.join('');


    // No seas vago, acá hay que hacer el cuerpo de la función!!!

    return returnValue;

}

textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.log(textoSalida)