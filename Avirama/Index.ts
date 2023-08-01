import { Estadio } from "./Estadio";
import { DetalleEstadio } from "./DetalleEstadio";

let detallesCiroLopez = new DetalleEstadio(1,1000,100,500,200) 
let estadioCiroLopez = new Estadio(1, "Ciro Lopez Popayan", "carrera 6 numero 283", detallesCiroLopez ) //una forma
//mandar una variable de tipo DetalleEstadio que pide en el objeto estadioCiroLopez

//otra forma es llamando directamente al constructor de la clase DetalleEstadio y entre parentesis llenar los atributos

let estadioMaracana = new Estadio(200, "Estadio Maracá de Brasil", "Sao Pablo", new DetalleEstadio(2, 50000, 100, 800, 300))

console.log("La Altura del estadio Maracá es de: ","\n************** ",estadioMaracana.getDetalleEstadio().getAltura()," *************")
