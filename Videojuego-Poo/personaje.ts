
    export abstract class Personaje {
    protected nombre: string;
    protected nivel: number = 1;
    protected vida: number;

    constructor(nombre: string, nivel: number, vida: number) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.vida = vida;
    }

    // Getters:
    public getNombre(): string {
    return this.nombre;
    }

    public getNivel(): number {
    return this.nivel;
    }

    public getVida(): number {
    return this.vida;
    }

    // Métodos:
    atacar(): void {
    console.log(`${this.nombre} está atacando`);
    }

    defender(): void {
    console.log(`${this.nombre} está defendiendo`);
    }

    abstract ataque_especial(): void;
    abstract progreso(): void;
}