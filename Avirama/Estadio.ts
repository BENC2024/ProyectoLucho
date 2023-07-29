import { DetalleEstadio } from "./DetalleEstadio";
export class Estadio{
    private id:number
    private nombre:string
    private direccion:string
    private detalle_estadio:DetalleEstadio

    constructor(id:number, nombre:string, direccion:string, detalle_estadio:DetalleEstadio){
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.detalle_estadio = detalle_estadio

    }

    public getId():number{
        return this.id
    }
    public getNombre():string{
        return this.nombre
    }
    public getDireccion():string{
        return this.direccion
    }
    public getDetalleEstadio(){
        return this.detalle_estadio
    }

    public setId(id:number){
        this.id = id
    }
    public setNombre(nombre:string){
        this.nombre = nombre
    }
    public setDireccion(direccion:string){
        this.direccion = direccion
    }
    public setDetalleEstadio(detalle_estadio:DetalleEstadio){
        this.detalle_estadio = detalle_estadio
    }
}