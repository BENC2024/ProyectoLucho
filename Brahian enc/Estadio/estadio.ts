import { DetalleEstadio } from "./detalleEstadio"

export class Estadio {

    private id : number
    private nombre : string
    private direccion : string
    private detEstadio : DetalleEstadio

    constructor(id: number, nombre: string, direccion: string, detalle: DetalleEstadio) {
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.detEstadio = detalle
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
    public getDetEstadio():DetalleEstadio{
        return this.detEstadio
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
    public setDetEstadio(detalle:DetalleEstadio){
        this.detEstadio = detalle
    }


    // public setDetalleEstadio(id:number,capacidad:number,altura:number,largo:number,ancho:number){
    //     this.detEstadio.setId(id)
    //     this.detEstadio.setCapacidad(capacidad)
    //     this.detEstadio.setAltura(altura)
    //     this.detEstadio.setLargo(largo)
    //     this.detEstadio.setAncho(ancho)
    // }

}
