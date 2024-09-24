import { Patente } from "./patente";


        export class Motovehiculos{
        
        private patente:Patente;
        private marca:string;
        private modelo:string;
        private cilindrada:number;

        constructor(patente:Patente, marca:string, modelo:string, clindrada:number){
            this.patente=patente;
            this.marca=marca;
            this.modelo=modelo;
            this.cilindrada=clindrada;
        }

      // Getter y Setter:
        public getPatente():Patente{
            return this.patente;
        }    

        public getMarca(): string {
            return this.marca;
        }

        public modificarMarca(patente: Patente, nuevaMarca: string): void {
            if (this.patente.getPatenteMoto() === patente.getPatenteMoto()) {
                this.marca = nuevaMarca;
            }
        }
    }