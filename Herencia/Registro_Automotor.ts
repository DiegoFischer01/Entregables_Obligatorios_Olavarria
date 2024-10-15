
    // import { Vehiculos } from "./vehiculos"; ¿no hace falta importar al padre?
    import { Motos } from "./motos";
    import { Autos } from "./autos";

    export class Registro_Automotor{

        private nombre:string;
        private motos: Motos[] = [];
        private autos: Autos [] = [];

        constructor(nombre:string){
            this.nombre=nombre;
        }

        // Get:    
        getNombre():string{
            return this.nombre;
        }

        // Método para agregar un motos:
        public agregarMoto(motos: Motos): void { 
            this.motos.push(motos);
            console.log("Moto agregada:", motos);
        }

        //Agregar autos:

        public agregarAuto(autos: Autos): void { 
            this.autos.push(autos);
            console.log("Auto agregado:", autos);
        }
    }