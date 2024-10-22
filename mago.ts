import { Personaje } from './personaje';

export class Mago extends Personaje {
    constructor(nombre: string) {
        super(nombre, 50, 80, 85, 65, `img/mago/mago.png`);
    }

    public atacar(): void {
        console.log(`${this.nombre} lanza un HECHIZO DEVASTADOR.`);
    }

    public defender(): void {
        console.log(`${this.nombre} se defendió CON SU CAMPO DE MAGIA.`);
    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} usa TELETRANSPORTACIÓN!`);
    }

    public ataqueEspecial2(): void {
        console.log(`${this.nombre} lanza RÁFAGA DE LUZ!`);
    }

    public getNivel(): number {
        return this.nivel;
    }
    
    public evolucionar(): void {
        super.evolucionar();
        console.log(`${this.nombre} ha evolucionado a MAGO SUPREMO`);
    }
}
