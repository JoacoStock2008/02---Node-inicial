class Alumno{
    constructor(username , DNI , edad){
        this.username = username;
        this.dni = DNI;
        this.edad = edad;
    }
    toString = () => `username: ${username}\nDNI: ${DNI}\nedad: ${edad}`;
}
//Exportar alumno