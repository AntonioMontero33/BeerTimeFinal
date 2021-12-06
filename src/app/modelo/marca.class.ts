export class Marca{
    constructor(
        public codMarca:String,
        public nombreMarca:String
    ){}

    
    public get getnombremarca() : String {
        return this.nombreMarca
    }
    public get getcodmarca() : String {
        return this.codMarca
    }
    
}
const marca01=new Marca("M001","Cartabio");
const marca02=new Marca("M002","Jack Daniels");
const marca03=new Marca("M003","Absolut");
const marca04=new Marca("M004","Johnnie Walker");
const marca05=new Marca("M005","Bacardi");

export const marcas:Marca[]=[
    marca01,marca02,marca03,marca04,marca05
]

