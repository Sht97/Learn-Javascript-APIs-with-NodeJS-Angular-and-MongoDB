import{Injectable} from '@angular/core';

import {Http,Response,Headers} from '@angular/http';

import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()


export class ServicioUsuarios{

  public url:string;
  constructor(private _http:Http){
    this.url="https://tutorialesatualcance.com/usuarios.json";
  }
  login(){

    //Cuando enviamos peticiones POST debemos declarar el tipo de contenido que vamos a enviat
    //a traveés de la cabezera HTTP
    let cabecera=new Headers({"Content-Type":"application/json"});
    return this._http.post(this.url,{cabecera:cabecera}).pipe(map(resultado => resultado.json()));

  }
}
