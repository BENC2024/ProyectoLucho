import { Estadio } from './estadio'
import { DetalleEstadio } from './detalleEstadio'

let detalleCiroLopez = new DetalleEstadio(10001,10000,200,500,200)
let estadioCiroLopez = new Estadio(101,"Estadio ciro lopez","parque de la salud",detalleCiroLopez)

let estadioMaracana = new Estadio(102,"Estadio Maracaná de Brasil","Sao Pablo", new DetalleEstadio(10002,50000,150,800,300))

//Nombre del estadio 1 y 2
//Altura de cada uno de los estadios

console.log( "Nombre: " + estadioCiroLopez.getNombre() )
console.log( "Nombre: " + estadioMaracana.getNombre() )

console.log( "La altura del " + estadioCiroLopez.getNombre() + " es de " + estadioCiroLopez.getDetEstadio().getAltura() )
console.log( "La altura del " + estadioMaracana.getNombre() + " es de " + estadioMaracana.getDetEstadio().getAltura() )

