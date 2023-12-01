import { Sanduiche } from "./sanduiche";
import { IngredientesDecorator } from "./ingredDecorator";

export class SanduicheFrangoAssado implements Sanduiche {
  custo(): number {
    return 4.5;
  }
}