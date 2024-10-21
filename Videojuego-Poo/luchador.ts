import { Personaje } from "./personaje";

    export class Luchador extends Personaje {
    protected arma: string;
    protected contadorAtaques: number;

    constructor(nombre: string, nivel: number, vida: number, arma: string) {
    super(nombre, nivel, vida);
    this.arma = arma;
    this.contadorAtaques = 0;
    }

    atacar(): void {
    console.log(`${this.nombre} está atacando con ${this.arma}`);
    this.contadorAtaques++;
    this.revisarProgreso();
    }

    ataque_especial(): void {
    console.log(`${this.nombre} utilizó su ataque especial de ${this.arma}`);
    }

    progreso(): void {
    this.nivel++;
    this.vida += 20;
    console.log(`${this.nombre} ha subido al nivel ${this.nivel} con ${this.vida} puntos de vida.`);
    this.contadorAtaques = 0; // Reinicia el contador de ataques después de subir de nivel
    if (this.nivel >= 3) {
    console.log(`${this.nombre} ha evolucionado a Caballero.`);
    }
    }

    revisarProgreso(): void {
    if (this.contadorAtaques >= 2) {
    this.progreso();
    }
    }
}