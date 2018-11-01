import{Injectable} from '@angular/core';

import {Http,Response,Headers} from '@angular/http';

import {map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable()


export class SlideServicio{
    /*public ruta_foto="assetts/img/slide/slide01.jpg";

    prueba(){
        return this.ruta_foto;

    }*/
    public url:string;
    constructor(private _http:Http){
      this.url="http://tutorialesatualcance.com/slide.json";
    }
    tomarJsonSlide(){
      return this._http.get(this.url).pipe(map(resultado => resultado.json()));

    }
}
