
export class Categoria{
    constructor(
        public codCategoria:String,
        public nombreCategoria:String
    ){}
    get getnombreCategoria(){
        return this.nombreCategoria
    }
    set setnombrecategoria(nombreCategoria:String){
        this.nombreCategoria=nombreCategoria;
    }
    get getcodCategoria(){
        return this.codCategoria
    }
}
const ron =new Categoria("C001","Ron");
const whisky =new Categoria("C002","Whisky");
const vodka =new Categoria("C003","Vodka");
const pisco =new Categoria("C004","Pisco");
const espirituosas =new Categoria("C005","Espirituosas");
const vino =new Categoria("C006","Vino");
const brandy =new Categoria("C007","Brandy");
const champaña =new Categoria("C008","Champaña");
const ginebra =new Categoria("C009","Ginebra");
const tequila =new Categoria("C010","Tequila");
const aperitivos =new Categoria("C011","Aperitivos");
const cerveza =new Categoria("C012","Cerveza");
const anizados =new Categoria("C013","Anizados");
const gin =new Categoria("C014","Gin");
const coñac=new Categoria("C015","Coñac");
const orujo=new Categoria("C016","Orujo");

export const categorias:Categoria[]=[
    ron,
    whisky,
    vodka,
    pisco,
    espirituosas,
    vino,
    brandy,
    champaña,
    ginebra,
    tequila,
    aperitivos,
    cerveza,
    anizados,
    gin,
    coñac,
    orujo
  ]
 
