import { Vehiculos } from "./vehiculos";

export class Autos extends Vehiculos{

    protected combustible:string;

    constructor(motor:string,ruedas:number,patente:string,marca:string,modelo:string,combustible:string){
        super(motor,ruedas,patente,marca,modelo,);
        this.combustible=combustible;
    }
}