import { DetalleEstadio, Estadio } from "./estadio"; 
let detalleEstadio1 =new DetalleEstadio(1, 100, 4, 30, 50)
let estadio1 =new Estadio(1, "Ciro Lopez","Calle123", detalleEstadio1)

console.log("Altura del estadio "+ estadio1.getNombre() + " es "+ detalleEstadio1.getAltura())

//console.log(estadio1.getdetalleEstadio().getAltura())