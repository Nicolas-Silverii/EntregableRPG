import { Personaje } from './personaje';
import { Guerrero } from './guerrero';
import { Mago } from './mago';
import { Elfo } from './elfo';
import { Enano } from './enano';


// Función para crear personajes

function crearPersonajes(): Personaje[] {
    const personajes: Personaje[] = [];
    console.log("{______-_-_-_-_-_-_-_-_-LA BATALLA HA COMENZADO-_-_-_-_-_-_-_-_-______}");
    
    // Nombres
    const guerreroNombre = 'Guerrero de Acero';
    const magoNombre = 'Mago Sabio';
    const elfoNombre = 'Elfo Ágil';
    const enanoNombre = 'Enano Fuerte';

    personajes.push(new Guerrero(guerreroNombre));
    personajes.push(new Mago(magoNombre));
    personajes.push(new Elfo(elfoNombre));
    personajes.push(new Enano(enanoNombre));

    return personajes;
    // MENSAJE DE COMIENZO DE BATALLA
}


// Función para simular el ataque de todos los personajes
function simularAtaques(personajes: Personaje[]): void {
    personajes.forEach(personaje => {
        personaje.atacar();
    });
}

// Función para ganar experiencia
function ganarExperiencia(personajes: Personaje[], puntos: number): void {
    personajes.forEach(personaje => {
        personaje.ganarExperiencia(puntos);
        console.log(personaje.getInfo());

        // Solo llamar a evolucionar si el nivel es 1
        if (personaje.getNivel() === 1) {
            personaje.evolucionar(); // Evolucionar a nivel 2
        }

        // Mostrar ataque especial
        personaje.ataqueEspecial();
        // Defender luego de arrojar los ataques especiales
        personaje.defender();
    });
}

// Crear personajes
const personajes = crearPersonajes();

// Simular ataques
simularAtaques(personajes);

// Ganar experiencia
ganarExperiencia(personajes, 300); // Hace que evolucionen



// Mostrar información despues de todo
personajes.forEach(personaje => {
    console.log(personaje.getInfo());
});

console.log("{______-_-_-_-_-_-_-_-_-LA BATALLA HA FINALIZADO-_-_-_-_-_-_-_-_-______}");
