"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerrero_1 = require("./guerrero");
var mago_1 = require("./mago");
var elfo_1 = require("./elfo");
var enano_1 = require("./enano");
// Función para crear personajes
function crearPersonajes() {
    var personajes = [];
    console.log("{______-_-_-_-_-_-_-_-_-LA BATALLA HA COMENZADO-_-_-_-_-_-_-_-_-______}");
    // Nombres
    var guerreroNombre = 'Guerrero de Acero';
    var magoNombre = 'Mago Sabio';
    var elfoNombre = 'Elfo Ágil';
    var enanoNombre = 'Enano Fuerte';
    personajes.push(new guerrero_1.Guerrero(guerreroNombre));
    personajes.push(new mago_1.Mago(magoNombre));
    personajes.push(new elfo_1.Elfo(elfoNombre));
    personajes.push(new enano_1.Enano(enanoNombre));
    return personajes;
    // MENSAJE DE COMIENZO DE BATALLA
}
// Función para simular el ataque de todos los personajes
function simularAtaques(personajes) {
    personajes.forEach(function (personaje) {
        personaje.atacar();
    });
}
// Función para ganar experiencia
function ganarExperiencia(personajes, puntos) {
    personajes.forEach(function (personaje) {
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
var personajes = crearPersonajes();
// Simular ataques
simularAtaques(personajes);
// Ganar experiencia
ganarExperiencia(personajes, 300); // Hace que evolucionen
// Mostrar información despues de todo
personajes.forEach(function (personaje) {
    console.log(personaje.getInfo());
});
console.log("{______-_-_-_-_-_-_-_-_-LA BATALLA HA FINALIZADO-_-_-_-_-_-_-_-_-______}");
