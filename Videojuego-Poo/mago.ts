import { Personaje } from "./personaje";

        export class Mago extends Personaje {

        protected arma:string;

        constructor(nombre: string, nivel: number, vida: number, arma: string) {
            super(nombre, nivel,vida); 
            this.arma=arma;
        }

        ataque_especial(): void {
            console.log(`${this.nombre} utilizo su ataque especial de ${this.arma}`);
        }
        progreso():void {
            //cuando ataca 2 veces evoluciona a hechicero.
        }
    }