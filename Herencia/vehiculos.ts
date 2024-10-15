
        export class Vehiculos{

        protected motor:string;
        protected ruedas: number;
        protected patente: string;
        protected marca:string;
        protected modelo:string;


        constructor(motor:string,ruedas:number,patente:string,marca:string,modelo:string){
            this.motor=motor;
            this.ruedas=ruedas;
            this.patente=patente;
            this.marca=marca;
            this.modelo=modelo;
        }

        //Metodos / get / set:

        public getPatente():string{
            return this.patente;
        }    

        public getMarca(): string {
            return this.marca;
        }

        public acelerar(): string {
            return `El vehículo con patente ${this.patente} esta en marcha.`;
        }

        }        