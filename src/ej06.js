let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl(miUrl);

console.log(miObjeto);


function parsearUrl(laURL){
    const newURL = new URL(laURL)
    const urlParseada = {
        host: null ,
        pathname: null ,
        parametros: null
    }
    try{
        urlParseada.host = newURL.host;
        urlParseada.pathname = newURL.pathname;
        urlParseada.parametros = newURL.searchParams;
    } catch (error) {
        console.error("Hubo un error:", error.message);
        urlParseada.host = "";
        urlParseada.pathname = "";
        urlParseada.parametros = "";
    }
    return urlParseada;
}