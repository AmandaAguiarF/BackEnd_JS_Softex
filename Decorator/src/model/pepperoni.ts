import { Sanduiche } from "./sanduiche";
import { IngredientesDecorator } from "./ingredDecorator";

export class PepperoniDecorator extends IngredientesDecorator {
  custo(): number {
    return this.sanduiche.custo() + 0.99;
  }
}
