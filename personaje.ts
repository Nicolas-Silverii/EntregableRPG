export class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected experiencia: number;
    protected fuerza: number;
    protected agilidad: number;
    protected energia: number;
    protected vitalidad: number;
    protected imagen: string;

    private static EXP_EVOLUCION: number = 150; // Solo una evolución

    constructor(nombre: string, fuerza: number, agilidad: number, energia: number, vitalidad: number, imagen: string) {
        this.nombre = nombre;
        this.nivel = 1;
        this.experiencia = 0;
        this.fuerza = fuerza;
        this.agilidad = agilidad;
        this.energia = energia;
        this.vitalidad = vitalidad;
        this.imagen = imagen;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public atacar(): void {
        console.log(`${this.nombre} ataca.`);
    }

    public defender(): void {
        console.log(`${this.nombre} se defiende.`);
    }

    /////////////////// PARA PODER EVOLUCIONAR LOS PERSONAJES ///////////////////

    public ganarExperiencia(puntos: number): void {
        this.experiencia += puntos;
        this.verificarEvolucion();
    }

    protected verificarEvolucion(): void {
        if (this.experiencia >= Personaje.EXP_EVOLUCION && this.getNivel() === 1) {
            this.evolucionar();
        }
    }

    public evolucionar(): void {
        if (this.nivel < 2) { 
            this.nivel++;
            this.incrementarAtributos();
            console.log(`${this.nombre} ha subido al NIVEL ${this.nivel}`);
        } else {
            console.log(`${this.nombre} El personaje no puede evolucionar más.`);
        }
    }

    protected incrementarAtributos(): void {
        this.fuerza += 5;
        this.agilidad += 5;
        this.energia += 5;
        this.vitalidad += 5;
    }

    ////////////////////////////////////////////////////////////////////////////

    public getInfo(): string {
        return `${this.nombre} - NIVEL: ${this.nivel}, EXP: ${this.experiencia}, FUERZA: ${this.fuerza}, AGILIDAD: ${this.agilidad}, ENERGÍA: ${this.energia}, VITALIDAD: ${this.vitalidad}`;
    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} usó su ATAQUE ESPECIAL!`);
    }

    public ataqueEspecial2(): void {
        console.log(`${this.nombre} usó su SEGUNDO ATAQUE ESPECIAL!`);
    }
}
