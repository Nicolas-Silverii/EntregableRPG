import { Personaje } from './personaje';

export class Enano extends Personaje {
    constructor(nombre: string) {
        super(nombre, 90, 40, 80, 70,`img/enano/enano.png`);
    }

    public atacar(): void {
        console.log(`${this.nombre} ataca con su HACHA PESADA.`);
    }
    
    public defender(): void {
        console.log(`${this.nombre} Se defendió con su ESCUDO DE ROBLE.`);
    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} usa BENDICIÓN DE LA MONTAÑA!`);
    }

    public ataqueEspecial2(): void {
        console.log(`${this.nombre} desata MARTILLO ANCESTRAL!`);
    }

  
    public evolucionar(): void {
        super.evolucionar(); 
        console.log(`${this.nombre} ha evolucionado a REY DE LA MONTAÑA`);
    }
    
}
 