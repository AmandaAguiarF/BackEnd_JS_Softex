import { Carro } from "./model/carro";
import { Moto } from "./model/moto";
import { Veiculo } from "./model/veiculo";


let listaVeiculos = new Array<Veiculo>();

let carroModelo = new Carro("Toro", "Fiat", 4, "Preto", 5, 170);
listaVeiculos.push(carroModelo);

let motoModelo = new Moto("Meteor FireBall", "Royal Enfield", 2, "Amarela", 350);
listaVeiculos.push(motoModelo);
// Criando os clones:
let cloneCarro1 = carroModelo.clone("Etios", "Toyota", 4, "Prata", 5, 95);
listaVeiculos.push(cloneCarro1);

let cloneCarro2 = carroModelo.clone("Picanto", "Kia", 4, "Preto", 5, 90);
listaVeiculos.push(cloneCarro2);

let cloneMoto1 = motoModelo.clone("Factor", "Yamaha", 2, "Preta", 150);
listaVeiculos.push(cloneMoto1);

let cloneMoto2 = motoModelo.clone("EV1", "Voltz", 2, "Vermelha", 80);
listaVeiculos.push(cloneMoto2);

listaVeiculos.forEach(element => {
    console.clear();
    console.table(listaVeiculos); 
});
