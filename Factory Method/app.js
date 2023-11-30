"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servidor_1 = require("./model/Servidor");
var PC_1 = require("./model/PC");
var servidorSoftex = new Servidor_1.Servidor(32, 1000, 4.8, "servidor", 15000, "RAID 0", "CentOS");
var pcSoftex = new PC_1.PC(16, 512, 3.2, "pc", 4000, "LG 24UHD");
console.log(servidorSoftex.toString());
console.log(pcSoftex.toString());
