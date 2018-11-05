import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';

import {map, filter, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Ruta} from "../ruta_global";
import {promise} from "selenium-webdriver";

@Injectable()


export class ServicioSlide {
  /*public ruta_foto="assetts/img/slide/slide01.jpg";

  prueba(){
      return this.ruta_foto;

  }*/
  public url: string;

  constructor(private _http: Http) {
    this.url = Ruta.url + "mostrar-slides";
  }

  tomarJsonSlide() {
    return this._http.get(this.url).pipe(map(resultado => resultado.json()));

  }

  subirImagenSlide(url, items, token, imagen) {
    if (!imagen) {
      return new Promise(function (resolver, rechazar) {
        rechazar("No hay imagen para subir")
      })
    } else {
      return new Promise(function (resolver, rechazar) {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("imagen", imagen[0]);
        formData.append("titulo", items.titulo);
        formData.append("descripcion", items.descripcion);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolver(JSON.parse(xhr.response))
            }
          }
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Authorization", token);
        xhr.send(formData);
      })
    }
  }
}
