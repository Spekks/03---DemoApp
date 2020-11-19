import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from 'src/app/interfaces/interface';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  public miLoading:HTMLIonLoadingElement;
  public u:User[] = [];

  constructor(private _loadingController:LoadingController,
              private _mensajeService:MensajesService,
              private _usuariosService:UsuariosService) { }

  ngOnInit() {
  }

  onClick(){
    this.presentaLoading();
    setTimeout(()=> {
      this.miLoading.dismiss();
    }, 1500)
  }

  async presentaLoading(){
    this.miLoading = await this._loadingController.create({
      mode: 'md',
      message: "Cargando...",
    });
    await this.miLoading.present();
  }

  async presentaLoading2(){
    this._mensajeService.mostrarLoading('Cargando desde service...');
    let usuario = await this._usuariosService.getUsuarios(1);
    this.u = usuario.data;
    this._mensajeService.ocultarLoading();
  }
}
