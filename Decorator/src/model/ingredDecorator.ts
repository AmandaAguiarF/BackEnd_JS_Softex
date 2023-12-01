import { Sanduiche } from "./sanduiche";
export abstract class IngredientesDecorator implements Sanduiche {
  constructor(protected sanduiche: Sanduiche) {}

  abstract custo(): number;
}