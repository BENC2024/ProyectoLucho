export class DetalleEstadio {

    private id:number
    private capacidad: number
    //Dimensiones:
    private altura: number
    private largo: number
    private ancho: number

    constructor(id: number, capacidad: number, altura:number, largo: number, ancho: number)   
    {
        this.id = id
        this.capacidad = capacidad
        this.altura = altura
        this.largo = largo
        this.ancho = ancho 
    }

    //Getter:

    public getId ():number{
        return this.id
    }

    public getCapacidad (): number{
        return this.capacidad
    }

    public getAltura (): number{
        return this.altura
    }

    public getLargo (): number{
        return this.largo
    }

    public getAncho (): number{
        return this.ancho
    }
    
    //Setter:

    public setId (id: number){
        this.id = id
    }

    public setCapacidad (capacidad: number){
        this.capacidad = capacidad
    }

    public setAltura (altura: number){
        this.altura = altura
    }

    public setLargo (largo: number){
        this.largo = largo
    }

    public setAncho (ancho: number){
        this.ancho = ancho
    }
}