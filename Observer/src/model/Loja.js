"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Observer_1 = require("./Observer");
var Loja = /** @class */ (function () {
    function Loja(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    Loja.prototype.publicarNovoProduto = function (text) {
        Observer_1.Observer.publicarSpam(text);
    };
    return Loja;
}());
exports.Loja = Loja;
