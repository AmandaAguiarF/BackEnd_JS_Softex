import { Pato } from "./model/pato"; 
import { AdaptadorPato } from "./model/adaptadorPato";
import { AdaptadorPatoDemo } from "./model/adaptadorPatoDemo";

const pato = new Pato();
const adaptador: AdaptadorPato = new AdaptadorPato(pato);
AdaptadorPatoDemo.demonstrar(adaptador);    