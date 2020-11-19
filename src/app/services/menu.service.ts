import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boton } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http:HttpClient) { }

  getMenu(){
    return new Promise<Boton[]>(resolve=>{
      this._http.get<Boton[]>('../assets/datosComponentes.json').subscribe(resp=>{
        resolve(resp);
      })
    })
  }
}
