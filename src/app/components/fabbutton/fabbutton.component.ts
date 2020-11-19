import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fabbutton',
  templateUrl: './fabbutton.component.html',
  styleUrls: ['./fabbutton.component.scss'],
})
export class FabbuttonComponent implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {}

  info() {
    console.log("Has clicado en info :)")
  }

  warning() {
    console.log("Has clicado en warning :(")
  }

  onClick(){
    this.presentAlert();
  }

  async presentAlert(){
    const alerta = await this.alertController.create({
      header: 'Título molesto',
      message: 'Esto es un fab-button molesto.',
      backdropDismiss: false,
      buttons: ['OK']
    });
    alerta.present();
  }
}
