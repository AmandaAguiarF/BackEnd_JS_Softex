"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.addCliente = function (cliente) {
        this.subscribers.push(cliente);
    };
    Observer.publicarSpam = function (text) {
        this.subscribers.forEach(function (cliente) {
            console.log(cliente.toString());
            console.log("Recebeu a mensagem :" + text);
        });
    };
    Observer.subscribers = new Array();
    return Observer;
}());
exports.Observer = Observer;
