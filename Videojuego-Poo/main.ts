import { Personaje } from "./personaje";
import { Luchador } from "./luchador";
import { Mago } from "./mago";
import { Arquero } from "./arquero";



const miLuchador = new Luchador("Maximus", 1, 100, "Espada");
miLuchador.atacar();
miLuchador.defender();
miLuchador.ataque_especial();
// miLuchador.progreso();