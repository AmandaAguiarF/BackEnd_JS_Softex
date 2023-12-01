import { Pato } from "./pato";

export class AdaptadorPato {
    pato: Pato;

    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    andar() {
      this.pato.botarOvo();
    }
  
    voar() {
      this.pato.voar();
    }
  }