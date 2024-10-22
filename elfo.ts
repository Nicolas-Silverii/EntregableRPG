import { Personaje } from './personaje';

export class Elfo extends Personaje {
    constructor(nombre: string) {
        super(nombre, 40, 85, 90, 45,`img/elfo/elfo.png`);
    }

    public atacar(): void {
        console.log(`${this.nombre} dispara una FLECHA CERTERA.`);
    }

    public defender(): void {
        console.log(`${this.nombre} ESQUIVÓ TU ATAQUE.`);
    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} usa ESENCIA RESTAURADORA!`);
    }

    public ataqueEspecial2(): void {
        console.log(`${this.nombre} lanza DESTELLO DE FLECHAS!`);
    }

   
    public evolucionar(): void {
        super.evolucionar(); 
        console.log(`${this.nombre} ha evolucionado a ALTO ELFO`);
    }
   
}
