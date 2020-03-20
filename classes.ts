import { actividades } from "./interfaces";

// Herencia
class Carpintero{
    herramientas(){
        return "Martillo";
    }
}

class persona extends Carpintero implements actividades{
    // Atributos
    private nombre: string;
    app: string;
    apm: string;
    edad: number;
    estatura: number;
    mascota: string;

    // Constructor
    constructor(){
        super();
        this.nombre = "Javier";
        this.app = "Candia";
        this.apm = "Huerta";
        this.edad = 23;
        this.estatura = 1.72;
        this.mascota = "gato";
    }

    // Métodos
    getNombre(){
        return this.nombre;
    }
    getNombreCompleto(){
        return `${this.nombre} ${this.app} ${this.apm}`;
    }

    comer(){
        // console.log("comer");
        return "Comer";
    }
    dormir(){
        // console.log("dormir");
        return "Dormir";
    }
}

// Instancia
let instancia: persona = new persona();

// Pruebas
// console.log(instancia);
// instancia.comer();
// instancia.dormir();
console.log(instancia.comer(), instancia.dormir(), instancia.mascota, instancia.herramientas());