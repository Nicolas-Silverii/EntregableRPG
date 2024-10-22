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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre) {
        return _super.call(this, nombre, 50, 80, 85, 65, "img/mago/mago.png") || this;
    }
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza un HECHIZO DEVASTADOR."));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defendi\u00F3 CON SU CAMPO DE MAGIA."));
    };
    Mago.prototype.ataqueEspecial = function () {
        console.log("".concat(this.nombre, " usa TELETRANSPORTACI\u00D3N!"));
    };
    Mago.prototype.ataqueEspecial2 = function () {
        console.log("".concat(this.nombre, " lanza R\u00C1FAGA DE LUZ!"));
    };
    Mago.prototype.getNivel = function () {
        return this.nivel;
    };
    Mago.prototype.evolucionar = function () {
        _super.prototype.evolucionar.call(this);
        console.log("".concat(this.nombre, " ha evolucionado a MAGO SUPREMO"));
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
