

export class DetalleEstadio{
    private id: number;
    private capacidad: number;
    private altura: number;
    private largo : number;
    private ancho: number;

    constructor(id:number, capacidad: number, altura: number, largo: number, ancho: number){
        this.id = id
        this.capacidad = capacidad
        this.altura = altura
        this.largo= largo
        this.ancho= ancho
    }

    public getId(): number{
        return this.id
    }
    public getCapacidad(): number{
        return this.capacidad
    }
    public getAltura(): number{
        return this.altura
    }
    public getLargo(): number{
        return this.largo
    }
    public getAncho(): number{
        return this.altura
    }

    public setID(id: number){
        this.id = id
    }
    public setCapacidad(capacidad:number){
        this.capacidad = capacidad
    }
    public setAltura(altura: number){
        this.altura = altura
    }
    public setLargo(largo: number){
        this.largo = largo
    }
    public setAncho(ancho: number){
        this.ancho = ancho
    }
}
export class Estadio{
    private id: number;
    private nombre: string;
    private direccion: string;
    private detalleEstadio: DetalleEstadio

    constructor(id: number, nombre: string, direccion: string, detalleEstadio: DetalleEstadio){
        this.id= id
        this.nombre = nombre
        this.direccion = direccion
        this.detalleEstadio = detalleEstadio
        
    }
    public getID(): number{
        return this.id
    }
    public getNombre(): string{
        return this.nombre
    }
    public getDireccion(): string{
        return this.direccion
    }
    public getdetalleEstadio(): DetalleEstadio{
        return this.detalleEstadio
    }

    public setID(id: number){
        this.id = id
    }
    public setNombre(nombre: string){
        this.nombre = nombre
    }
    public setDireccion(direccion: string){
        this.direccion = direccion
    }
    public setdetalleEstadio(detalleEstadio: DetalleEstadio){
        this.detalleEstadio = detalleEstadio
    }
   
}