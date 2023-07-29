import { Detalleestadio } from "./detallesEstadio";
export class Estadio {
    private id: number
    private nombre:string
    private direccion:string
    private detalleEstadio: Detalleestadio

    constructor(id: number, nombre: string, direccion:string, detalleEstadio: Detalleestadio){
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.detalleEstadio = detalleEstadio
    }
    public getId(){
        return this.id
    }
    public getNombre(){
        return this.nombre
    }
    public getDireccion(){
        return this.direccion
    }
    public getDetallesEstadio(){
        return this.detalleEstadio
    }
    public setId(id:number){
        this.id = id
    }
    public setNombre(nombre:string){
        this.nombre = nombre
    }
    public setetDireccion(direccion:string){
        this.direccion = direccion
    }
    public setDetallesEstadio(detalleEstadio:Detalleestadio){
        this.detalleEstadio = detalleEstadio
    }

}