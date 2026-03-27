import fs from 'fs';

const ARCHIVO_ENTRADA           = "./archivo-entrada.txt";
const ARCHIVO_SALIDA            = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    const infoArchivo = fs.readFileSync(ARCHIVO_ENTRADA, 'utf8')
    escribirArchivo(infoArchivo, ARCHIVO_SALIDA);
    if(infoArchivo != ""){
        console.log("Archivo copiado y pegado correctamente")
    } else{
        console.log("Error al leer el archivo")
    }
}

function escribirArchivo(infoArchivo, ARCHIVO_SALIDA) {fs.writeFileSync(ARCHIVO_SALIDA, infoArchivo)};