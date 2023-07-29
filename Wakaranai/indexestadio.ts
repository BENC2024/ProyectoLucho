import { Detalleestadio } from "./clases/detallesEstadio";
import { Estadio } from "./clases/stadium";
// let detalleslol = new Detalleestadio(12,10000, 1.32, 1413, 1233)
let barrancabermeja = new Estadio(100, "NOT FOUND", "Barranquilla", new Detalleestadio(12,10000, 1.32, 1413, 1233))

console.log(barrancabermeja.getNombre());
console.log(barrancabermeja.getDetallesEstadio());
console.log("la altura del estadio: " + barrancabermeja.getDetallesEstadio().getAltura())
