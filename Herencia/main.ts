// main Herencia:
import { Vehiculos } from "./vehiculos";
import { Motos } from "./motos";
import { Autos } from "./autos";
import { Registro_Automotor } from "./Registro_Automotor";

let moto1 : Motos = new Motos("Japones",2,"678-YUK","Honda","Tornado","Enduro",200);
console.log(moto1);

let auto1: Autos = new Autos("V8",4,"GQN-274","Peugeot","206","Nafta");
console.log(auto1);

let Registro_Automotor_Herencial: Registro_Automotor = new Registro_Automotor("Registro Unico de Vehiculos (RUV)");
console.log(Registro_Automotor_Herencial);

console.log(`---------------------------------------------------------------------------------------`);

Registro_Automotor_Herencial.agregarAuto(auto1);

Registro_Automotor_Herencial.agregarMoto(moto1);

console.log(`---------------------------------------------------------------------------------------`);

console.log(Registro_Automotor_Herencial);
