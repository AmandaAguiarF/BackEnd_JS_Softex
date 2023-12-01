import { Sanduiche } from "./model/sanduiche";
import { IngredientesDecorator } from "./model/ingredDecorator";
import { SanduicheFrangoAssado } from "./model/frangoAssado";
import { PepperoniDecorator } from "./model/pepperoni";
import { QueijoMussarelaRaladoDecorator } from "./model/queijoMussarelaRalado";

const sanduicheFrangoAssado: Sanduiche = new SanduicheFrangoAssado();
console.log(sanduicheFrangoAssado, 'Sanduíche de Frango Assado');

const sanduichePepperoni: Sanduiche = new PepperoniDecorator(sanduicheFrangoAssado);
console.log(sanduichePepperoni, 'Sanduíche de Frango Assado com Pepperoni');

const sanduichePepperoniQueijo: Sanduiche = new QueijoMussarelaRaladoDecorator(sanduichePepperoni);
console.log(sanduichePepperoniQueijo, 'Sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado');