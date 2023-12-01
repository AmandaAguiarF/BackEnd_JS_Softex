"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    Cliente.prototype.toString = function () {
        return "Cliente" + this.nome + "de email" + this.email;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
