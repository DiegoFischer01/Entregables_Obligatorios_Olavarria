import { Personaje } from "./personaje";
import { Luchador } from "./luchador";
import { Mago } from "./mago";
import { Arquero } from "./arquero";



const maximus = new Luchador("Maximus", 1, 100, "Espada");
maximus.atacar(); // Primer ataque
maximus.getNivel();
maximus.atacar(); // Segundo ataque, sube a nivel 2
maximus.atacar(); // Tercer ataque
maximus.atacar(); // Cuarto ataque, sube a nivel 3 y evoluciona
