import { Servidor } from "./model/Servidor";
import { PC } from "./model/PC";

let servidorSoftex = new Servidor(32, 1000, 4.8, "servidor", 15000, "RAID 0", "CentOS");

let pcSoftex = new PC(16, 512, 3.2, "pc", 4000, "LG 24UHD");

console.log(servidorSoftex.toString());
console.log(pcSoftex.toString());
