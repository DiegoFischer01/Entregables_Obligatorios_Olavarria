
    import { Patente } from "./patente";
    import { Motovehiculos } from "./Motos";
    import { Automotores } from "./Autos";
    import { Camiones } from "./Camiones";

    export class Registro_Automotor {

        private nombre:string;
        private motos: Motovehiculos[] = [];
        private autos: Automotores [] = [];
        private camiones: Camiones [] = [];


        constructor(nombre:string){
            this.nombre=nombre;
        }

    // Get:    
        getNombre():string{
            return this.nombre;
        }
    // Método para agregar un vehiculos:
    public agregarMoto(motos: Motovehiculos): void { 
        this.motos.push(motos);
        console.log("Moto agregada:", motos);
    }

//Agregar autos:

public agregarAuto(autos: Automotores): void { 
    this.autos.push(autos);
    console.log("Auto agregado:", autos);
}


    // Método para dar de baja un vehiculos:
    public darDeBajaVehiculo(patente: Patente): void {
        this.motos = this.motos.filter(v => v.getPatente().getPatenteMoto() !== patente.getPatenteMoto());
        console.log("Vehículo con patente", patente.getPatenteMoto(), "dado de baja.");
    }

    // Método para modificar un vehículo
    public modificarVehiculo(patente: Patente, nuevaMarca: string): void {
        const vehiculo = this.motos.find(v => v.getPatente().getPatenteMoto() === patente.getPatenteMoto());
        if (vehiculo) {
            vehiculo.modificarMarca(patente, nuevaMarca);
            console.log("Vehículo con patente", patente.getPatenteMoto(), "modificado a nueva marca:", nuevaMarca);
        } else {
            console.log("Vehículo con patente", patente.getPatenteMoto(), "no encontrado.");
        }
    }

    // Método para listar todos los vehículos (opcional)
    public listarVehiculos(): void {
        console.log("Lista de vehículos registrados:");
        this.motos.forEach(v => console.log(v));
    }
}
