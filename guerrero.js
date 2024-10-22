"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerrero = void 0;
var personaje_1 = require("./personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre) {
        return _super.call(this, nombre, 80, 35, 60, 90, "img/guerrero/guerrero.png") || this;
    }
    Guerrero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza un poderoso GOLPE CON SU ESPADA."));
    };
    Guerrero.prototype.defender = function () {
        console.log("".concat(this.nombre, " logr\u00F3 defender el ATAQUE CON SU ESCUDO."));
    };
    Guerrero.prototype.ataqueEspecial = function () {
        console.log("".concat(this.nombre, " usa ESCUDO DE ACERO!"));
    };
    Guerrero.prototype.ataqueEspecial2 = function () {
        console.log("".concat(this.nombre, " desata FURIA DEL BERSEKER!"));
    };
    Guerrero.prototype.evolucionar = function () {
        _super.prototype.evolucionar.call(this); // Llama al método de la clase base
        console.log("".concat(this.nombre, " ha evolucionado a GUERRERO MASTER"));
    };
    return Guerrero;
}(personaje_1.Personaje));
exports.Guerrero = Guerrero;
