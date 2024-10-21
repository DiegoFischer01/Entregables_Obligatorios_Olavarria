import { Personaje } from "./personaje";

    class Arquero extends Personaje {

        arma:string;
        super(nombre:string,nivel:number,vida:number,arma:string) {
            this.nombre=nombre;
            this.nivel=nivel;
            this.vida=vida;
            this.arma=arma;
        }

        ataque_especial(): void {
            console.log(`${this.nombre} utilizo su ataque especial de ${this.arma}`);
        }

        progreso():void {
            //cuando ataca 3 veces evoluciona a Arquero Elite.
        }
    }