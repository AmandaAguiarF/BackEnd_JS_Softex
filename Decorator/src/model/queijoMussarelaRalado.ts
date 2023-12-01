import { Sanduiche } from "./sanduiche"; 
import { IngredientesDecorator } from "./ingredDecorator";

export class QueijoMussarelaRaladoDecorator extends IngredientesDecorator {
  custo(): number {
    return this.sanduiche.custo() + 2.0;
  }
}
