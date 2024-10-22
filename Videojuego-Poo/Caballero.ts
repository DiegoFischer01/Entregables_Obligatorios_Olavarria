import { Personaje } from "./personaje";
import { Luchador } from "./luchador";

export class Caballero extends Luchador {
  constructor(nombre: string, nivel: number, vida: number, arma: string) {
    super(nombre, nivel, vida, arma);
  }

  public atacar(): void {
    console.log(`${this.nombre}, el Caballero, está atacando con ${this.arma}`);
    this.contadorAtaques++;
    this.revisarProgreso();
  }

  public ataque_especial(): void {
    console.log(`${this.nombre}, el Caballero, utilizó su ataque especial de ${this.arma}`);
  }

  public progreso(): Luchador {
    this.nivel++;
    this.vida += 30;
    console.log(`${this.nombre}, el Caballero, ha subido al nivel ${this.nivel} con ${this.vida} puntos de vida.`);
    this.contadorAtaques = 0;
    return this;
  }
}

