import { Patente } from "./patente";


    export class Automotores{

        private patente:Patente;
        private marca: string;
        private modelo:string;

        constructor(patente:Patente, marca:string, modelo:string){
            this.patente=patente;
            this.marca=marca;
            this.modelo=modelo;
        }

         // Getter y Setter:
         public getPatente():Patente{
            return this.patente;
        }    

        public getMarca(): string {
            return this.marca;
        }

        public getModelo(): string {
            return this.modelo;
        }

        public modificarMarca(patente: Patente, nuevaMarca: string): void {
            if (this.patente.getPatenteMoto() === patente.getPatenteMoto()) {
                this.marca = nuevaMarca;
            }
        }
    }






