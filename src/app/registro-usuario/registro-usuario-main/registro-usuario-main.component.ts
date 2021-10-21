import { Component, OnInit } from '@angular/core';
import { Usuario, usuarios } from '../../modelo/usuario.class';

@Component({
  selector: 'app-registro-usuario-main',
  templateUrl: './registro-usuario-main.component.html',
  styleUrls: ['./registro-usuario-main.component.css']
})
export class RegistroUsuarioMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  dniUsuario:String=''
  NombreUsuario:String=''
  ApeliidoUsuario:String=''
  Usuario:String=''
  Contrasena:string=''
  Contrasenaa:String=''
  Celular:String=''
  Correo:string=''
  Direccion:String=''
  usuarios:Usuario[] = usuarios

  registrar():void{
    if(this.Contrasena==this.Contrasenaa){
      const nuevoUsuario:Usuario=new Usuario(this.dniUsuario,
        this.NombreUsuario,this.ApeliidoUsuario,this.Usuario,
        this.Contrasena,this.Celular,this.Correo,this.Direccion)
        usuarios.push(nuevoUsuario)
        console.log(nuevoUsuario)
    }
    else{
      alert('La contraseña no es igual')
    }
  }
}
