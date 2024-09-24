
export class Patente{
    private codigo:string;

    constructor(codigo:string){
        this.codigo=codigo;
    }
    
    //Getter:
    public getPatenteMoto():string{
        return this.codigo;
    }
}