
import { Vehiculos } from "./vehiculos";

    export class Motos extends Vehiculos{

    protected tipo:string;
    protected cilindrada:number;

    constructor(motor:string,ruedas:number,patente:string,marca:string,modelo:string,tipo:string,cilindrada:number){
        super(motor,ruedas,patente,marca,modelo);
        this.tipo=tipo;
        this.cilindrada=cilindrada;
    }
    
    public setCilindrada(nuevaCilindrada:number):void{
        this.cilindrada=nuevaCilindrada;
    }

    public hacerWilly(patente:string):string{
        return `La ${this.marca} ${this.modelo} esta haciendo una willy!!!!`
    }


}