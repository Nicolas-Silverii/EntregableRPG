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
exports.Enano = void 0;
var personaje_1 = require("./personaje");
var Enano = /** @class */ (function (_super) {
    __extends(Enano, _super);
    function Enano(nombre) {
        return _super.call(this, nombre, 90, 40, 80, 70, "img/enano/enano.png") || this;
    }
    Enano.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con su HACHA PESADA."));
    };
    Enano.prototype.defender = function () {
        console.log("".concat(this.nombre, " Se defendi\u00F3 con su ESCUDO DE ROBLE."));
    };
    Enano.prototype.ataqueEspecial = function () {
        console.log("".concat(this.nombre, " usa BENDICI\u00D3N DE LA MONTA\u00D1A!"));
    };
    Enano.prototype.ataqueEspecial2 = function () {
        console.log("".concat(this.nombre, " desata MARTILLO ANCESTRAL!"));
    };
    Enano.prototype.evolucionar = function () {
        _super.prototype.evolucionar.call(this);
        console.log("".concat(this.nombre, " ha evolucionado a REY DE LA MONTA\u00D1A"));
    };
    return Enano;
}(personaje_1.Personaje));
exports.Enano = Enano;
