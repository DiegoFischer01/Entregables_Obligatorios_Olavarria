
    import { Patente } from "./patente";
    import { Motovehiculos } from "./Motos";
    import { Automotores } from "./Autos";
    import { Camiones } from "./Camiones";

    export class Registro_Automotor {

        private nombre:string;
        private vehiculos: (Motovehiculos | Automotores | Camiones)[] = [];

        constructor(nombre:string){
            this.nombre=nombre;
        }

    // Get:    
        getNombre():string{
            return this.nombre;
        }
    // Método para agregar un vehículo
    public agregarVehiculo(vehiculo: Motovehiculos | Automotores | Camiones): void { //usas | para definir uniones de tipos o realizar operaciones a nivel de bits, mientras que || se usa para evaluar expresiones lógicas. En tu método agregarVehiculo, | es correcto porque estás definiendo un tipo de unión para el parámetro vehiculo
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado:", vehiculo);
    }

    // Método para dar de baja un vehículo
    public darDeBajaVehiculo(patente: Patente): void {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente().getPatenteMoto() !== patente.getPatenteMoto());
        console.log("Vehículo con patente", patente.getPatenteMoto(), "dado de baja.");
    }

    // Método para modificar un vehículo
    public modificarVehiculo(patente: Patente, nuevaMarca: string): void {
        const vehiculo = this.vehiculos.find(v => v.getPatente().getPatenteMoto() === patente.getPatenteMoto());
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
        this.vehiculos.forEach(v => console.log(v));
    }
}
