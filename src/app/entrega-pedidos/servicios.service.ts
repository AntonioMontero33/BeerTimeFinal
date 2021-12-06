import { Injectable } from '@angular/core';
import { Reserva, reservas } from '../modelo/reserva.class';
import { usuarioactivo, localactivo } from '../login/login-main/services/login.service';
import { usuarios, Usuario } from '../modelo/usuario.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private route:Router) { 
    
  }
  usuarioactivo=usuarioactivo
  localactivo=localactivo
  listareservas:Reserva[]=[]
  
  get getlistareservas(){
    if(usuarioactivo.length!=0){
      this.listareservas = reservas.filter(element => element.getusuarioreserva ==  usuarioactivo[0] );
      
    }else{
      this.listareservas = reservas.filter(element => element.getlocalReserva ==  localactivo[0]);
    }
    return this.listareservas;

  }
  
  
  eliminar(numero:number){
    reservaactiva.splice(numero,1);
  }

  vista(reserva:Reserva){
    reservaactiva.splice(0,1)
    reservaactiva.push(reserva)
    this.route.navigate(['descripcion-boleta'])

  }
}
export const reservaactiva:Reserva[]=[]
