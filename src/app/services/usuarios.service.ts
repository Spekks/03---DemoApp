import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Page } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http:HttpClient) { }

  getUsuarios(pagina?:number){
    let n = pagina?pagina:1
    return new Promise<Page>(resolve=>{
      this._http.get<Page>(`${environment.apiurl}?page=${n}`).subscribe(resp=>{
        resolve(resp);
      })
    })
  }
}
