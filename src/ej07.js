import { getCurrencyAbbreviationFromName , getCountryByAbbreviation } from 'country-currency-map';

let monedaDelPais, codigoPais;

codigoPais = 'AR';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    let monedaDelPais = "";
    if(codigoPais != null){
        const pais = getCountryByAbbreviation(codigoPais);
        if(pais != null && pais != undefined){
            monedaDelPais = getCurrencyAbbreviationFromName(pais);
        }
    } else{
        console.log("El código del país es incorrecto")
    }
    return monedaDelPais;
}