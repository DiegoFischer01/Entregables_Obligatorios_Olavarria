import { Patente } from "./patente";
import { Motovehiculos } from "./Motos";
import { Automotores } from "./Autos";
import { Camiones } from "./Camiones";
import { Registro_Automotor } from "./RegistroAutomotor";

//Instancio la primera moto y pruebo getters, setters y metodos:
const patenteMoto1 = new Patente("321LFG");
let moto1= new Motovehiculos(patenteMoto1, "Yamaha", "YZF-R3", 321); // Primera moto instanciada.
console.log(moto1.getMarca());// Esto imprime "Yamaha"
console.log(moto1); // Esto imprime el objeto moto1
//seteo patente nueva y la muuestro:
moto1.modificarMarca(patenteMoto1,"Honda");
console.log(moto1.getMarca());

//Instancio el auto1 y pruebo sus metodos:
const patenteAuto1 = new Patente("ABC123");
let auto1 = new Automotores(patenteAuto1,"Peugeot", "206");
console.log(auto1)
console.log(auto1.getPatente());


//Instancio camion1:
const patenteCamion1 = new Patente("AF-555-CB");
let camion1 = new Camiones(patenteCamion1,"Mercedes Benz", "11 14");
console.log(camion1);

//Instancio el Registro:
const Registro1:Registro_Automotor = new Registro_Automotor("Registro Nº1");
console.log(Registro1.getNombre());
Registro1.agregarVehiculo(auto1);
Registro1.listarVehiculos();
Registro1.agregarVehiculo(moto1);
Registro1.listarVehiculos();