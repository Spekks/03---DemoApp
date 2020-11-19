import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  public loading:HTMLIonLoadingElement;

  constructor(public toastController:ToastController,
              public loadingController:LoadingController) { }
  
  async muestraMensaje(mensaje:string, tiempo?:number) {
    let t = tiempo?tiempo:2000
    const toast = await this.toastController.create({
      message: mensaje,
      duration: t,
      position: 'middle'
    });

    toast.present();
  }

  async mostrarLoading(mensajeLoading:string){
    this.loading = await this.loadingController.create({
      mode: 'md',
      message: mensajeLoading,
    });
    await this.loading.present();
  }

  async ocultarLoading(){
    if(this.loading){
      this.loading.dismiss();
    }
  }
}
