import { DetalleEstadio } from "./DetalleEstadio";

export class Estadio {

    private id: number
    private nombre: string 
    private direccion: string 
    private detalleEstadio: DetalleEstadio

    constructor(id: number, nombre: string , direccion: string, detalleEstadio: DetalleEstadio) 
    {
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.detalleEstadio = detalleEstadio  
    }

    //Getters:

    public getDetalleEstadio (): DetalleEstadio{
        return this.detalleEstadio
    }

    public getId (): number{
        return this.id
    }

    public getNombre ():string{
        return this.nombre
    }

    public getDireccion ():string{
        return this.direccion
    }

    //Setters:

    public setId (id: number){
        this.id = id
    }

    public setNombre (nombre: string){
        this.nombre = nombre
    }
    public setDireccion (direccion:string){
        this.direccion = direccion
    }

    public setDetalleEstadio (detalleEstadio: DetalleEstadio){
        this.detalleEstadio = detalleEstadio
    }
}