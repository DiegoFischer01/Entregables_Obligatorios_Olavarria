
    class Motovehiculos{
        
        private patente:PatentesMoto;
        private marca:string;
        private modelo:string;
        private cilindrada:number;

        constructor(patente:PatentesMoto, marca:string, modelo:string, clilindrada:number){
            this.marca=marca;
            this.modelo=modelo;
            this.cilindrada=clilindrada;
        }

        // Getter y Setter:
        public getMarca():string{
            return this.marca;
        }
        public modificarMarca(patente:number): void{
            //validar con un if la patente recibida para setear la marca.
        }


    }

    class PatentesMoto{
        private patente:number;

        constructor(patente:number){
            this.patente=patente;
        }
        
        //Getter:
        public getPatente():number{
            return this.patente;
        }
    }