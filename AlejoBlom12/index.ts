
import { DetalleEstadio } from "./DetalleEstadio";
import { Estadio } from "./Estadio";

//Primera Manera:

let detallesPakistan = new DetalleEstadio(1, 100 , 10 , 45 , 30)

let estadioPakistan  = new Estadio (100, "Pakistan Plomo", "Bunker Pakistan", detallesPakistan)
//Segunda Manera:

let estadioBerlin = new Estadio (300, "Muro Berlin", "Berlin XD", new DetalleEstadio(2, 400, 20,100,89))

console.log(estadioPakistan.getDetalleEstadio().getAltura())

console.log(estadioBerlin.getDetalleEstadio().getAltura())