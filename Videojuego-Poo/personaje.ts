
    export abstract class Personaje {

        protected  nombre:string;
        protected  nivel:number = 1;
        protected  vida:number;

        constructor(nombre:string,nivel:number,vida) {
            this.nombre=nombre;
            this.nivel=nivel;
            this.vida=vida;
        }

        //Metodos:
        atacar():void {
            console.log(`${this.nombre} esta atacando`);
        }

        defender():void {
            console.log(`${this.nombre} estas defendiendo`);
        }

        abstract ataque_especial();

    }