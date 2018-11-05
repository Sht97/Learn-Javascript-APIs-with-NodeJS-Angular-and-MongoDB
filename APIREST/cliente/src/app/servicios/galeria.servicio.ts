import{Injectable} from '@angular/core';

import {Http,Response,Headers} from '@angular/http';

import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Ruta} from "../ruta_global";

@Injectable()


export class GaleriaServicio{

  public url:string;
  constructor(private _http:Http){
    this.url=Ruta.url+"mostrar-fotos";
  }
  tomarJsonGaleria(){
    return this._http.get(this.url).pipe(map(resultado => resultado.json()));

  }
}
