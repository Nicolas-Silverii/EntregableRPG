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
exports.Elfo = void 0;
var personaje_1 = require("./personaje");
var Elfo = /** @class */ (function (_super) {
    __extends(Elfo, _super);
    function Elfo(nombre) {
        return _super.call(this, nombre, 40, 85, 90, 45, "img/elfo/elfo.png") || this;
    }
    Elfo.prototype.atacar = function () {
        console.log("".concat(this.nombre, " dispara una FLECHA CERTERA."));
    };
    Elfo.prototype.defender = function () {
        console.log("".concat(this.nombre, " ESQUIV\u00D3 TU ATAQUE."));
    };
    Elfo.prototype.ataqueEspecial = function () {
        console.log("".concat(this.nombre, " usa ESENCIA RESTAURADORA!"));
    };
    Elfo.prototype.ataqueEspecial2 = function () {
        console.log("".concat(this.nombre, " lanza DESTELLO DE FLECHAS!"));
    };
    Elfo.prototype.evolucionar = function () {
        _super.prototype.evolucionar.call(this);
        console.log("".concat(this.nombre, " ha evolucionado a ALTO ELFO"));
    };
    return Elfo;
}(personaje_1.Personaje));
exports.Elfo = Elfo;
