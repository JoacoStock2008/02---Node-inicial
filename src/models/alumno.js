class Alumno{
    constructor(username , DNI , edad){
        this.username = username;
        this.dni = DNI;
        this.edad = edad;
    }
    toString = () => `username: ${this.username}\nDNI: ${this.dni}\nedad: ${this.edad}`;
}
export {Alumno};