import { Patente } from "./patente";
import { Motovehiculos } from "./Motos";
import { Automotores } from "./Autos";
import { Camiones } from "./Camiones";
import { Registro_Automor } from "./RegistroAutomotor";

//Instancio la primera moto y pruebo getters, setters y metodos:
const patenteMoto1 = new Patente("ABC123");
let moto1= new Motovehiculos(patenteMoto1, "Yamaha", "YZF-R3", 321); // Primera moto instanciada.
console.log(moto1.getMarca());// Esto imprime "Yamaha"
console.log(moto1); // Esto imprime el objeto moto1
//seteo patente nueva y la muuestro:
moto1.modificarMarca(patenteMoto1,"Honda");
console.log(moto1.getMarca());

//Instancio el auto1 y pruebo sus metodos:
