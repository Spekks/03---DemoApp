import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { Page, User } from 'src/app/interfaces/interface';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild('miRefresher') refresher:IonRefresher;
  @ViewChild('miInfinite') infinite:IonInfiniteScroll;
  public usuarios:User[] = [];
  public paginas:number = 1;

  constructor(private _mensajeService:MensajesService, private _usuariosService:UsuariosService) { }

  async ngOnInit() {
    const u = await this._usuariosService.getUsuarios(this.paginas);
    this.usuarios = u.data;
    //this.usuarios = [];  Para comprobar que el botón no carga con una lista vacía.
  }

  // Función para controlar que nuestro fab-button devuelva la página a su estado inicial
  async onClick(){
    this.paginas = 1;  // Estado inicial de la página, con la página 1 de la API.
    const u = await this._usuariosService.getUsuarios(this.paginas);
    this.usuarios = u.data;
    this.infinite.disabled = false;  // Quitamos la propiedad disabled o el infinite-scroll no volverá a funcionar.
    this._mensajeService.muestraMensaje('Lista limpiada', 2000);
  }

  //-- Ion-refresher --
  /*
  async doRefresh(event) {
    this.paginas += 1;
    const u = await this._usuariosService.getUsuarios(this.paginas);
    if (this.paginas <= u.total_pages) {
      setTimeout(() => {
        for(let user in u.data) {
          this.usuarios.push(u.data[user]);
        }
        this.refresher.complete();
      }, 2000);
    } else {
      this._mensajeService.muestraMensaje('No hay más elementos en la lista', 2000);
      this.refresher.complete();
    }
  }
  */

  //-- Ion-infinite-scroll --

  async loadData(event) {
    this.paginas += 1;
    const u = await this._usuariosService.getUsuarios(this.paginas);
    if (this.paginas <= u.total_pages) {
      setTimeout(() => {
        for(let user in u.data) {
          this.usuarios.push(u.data[user]);
        }
        this.infinite.complete();
      }, 1500);
    } else {
      this._mensajeService.muestraMensaje('No hay más elementos en la lista', 2000);
      this.infinite.disabled = true;
      this.infinite.complete();
    }
  }
}
