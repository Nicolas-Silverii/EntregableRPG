"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, fuerza, agilidad, energia, vitalidad, imagen) {
        this.nombre = nombre;
        this.nivel = 1;
        this.experiencia = 0;
        this.fuerza = fuerza;
        this.agilidad = agilidad;
        this.energia = energia;
        this.vitalidad = vitalidad;
        this.imagen = imagen;
    }
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca."));
    };
    Personaje.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defiende."));
    };
    /////////////////// PARA PODER EVOLUCIONAR LOS PERSONAJES ///////////////////
    Personaje.prototype.ganarExperiencia = function (puntos) {
        this.experiencia += puntos;
        this.verificarEvolucion();
    };
    Personaje.prototype.verificarEvolucion = function () {
        // Solo permitir evolución de nivel 1 a nivel 2
        if (this.experiencia >= Personaje.EXP_EVOLUCION && this.getNivel() === 1) {
            this.evolucionar();
        }
    };
    Personaje.prototype.evolucionar = function () {
        if (this.nivel < 2) {
            this.nivel++;
            this.incrementarAtributos();
            console.log("".concat(this.nombre, " ha subido al NIVEL ").concat(this.nivel));
        }
        else {
            console.log("".concat(this.nombre, " El personaje no puede evolucionar m\u00E1s."));
        }
    };
    Personaje.prototype.incrementarAtributos = function () {
        this.fuerza += 5;
        this.agilidad += 5;
        this.energia += 5;
        this.vitalidad += 5;
    };
    ////////////////////////////////////////////////////////////////////////////
    Personaje.prototype.getInfo = function () {
        return "".concat(this.nombre, " - NIVEL: ").concat(this.nivel, ", EXP: ").concat(this.experiencia, ", FUERZA: ").concat(this.fuerza, ", AGILIDAD: ").concat(this.agilidad, ", ENERG\u00CDA: ").concat(this.energia, ", VITALIDAD: ").concat(this.vitalidad);
    };
    Personaje.prototype.ataqueEspecial = function () {
        console.log("".concat(this.nombre, " usa su ataque especial!"));
    };
    Personaje.prototype.ataqueEspecial2 = function () {
        console.log("".concat(this.nombre, " usa su segundo ataque especial!"));
    };
    Personaje.EXP_EVOLUCION = 150; // Solo una evolución
    return Personaje;
}());
exports.Personaje = Personaje;
