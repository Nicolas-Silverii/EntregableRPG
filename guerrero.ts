import { Personaje } from './personaje';

export class Guerrero extends Personaje {
    constructor(nombre: string) {
        super(nombre, 80, 35, 60, 90,`img/guerrero/guerrero.png`);
    }

    public atacar(): void {
        console.log(`${this.nombre} lanza un poderoso GOLPE CON SU ESPADA.`);
    }

    public defender(): void {
        console.log(`${this.nombre} logró defender el ATAQUE CON SU ESCUDO.`);
    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} usa ESCUDO DE ACERO!`);
    }

    public ataqueEspecial2(): void {
        console.log(`${this.nombre} desata FURIA DEL BERSEKER!`);
    }

    public evolucionar(): void {
        super.evolucionar(); 
        console.log(`${this.nombre} ha evolucionado a GUERRERO MASTER`);
    }
}
