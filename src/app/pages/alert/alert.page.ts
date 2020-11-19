import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  constructor(public alertController: AlertController) { }

  onClick() {
    this.presentAlertMultipleButtons();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Título',
      message: 'Alerta 101.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          cssClass: 'verde',
          handler: () => {
            console.log('OK clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]      
    });

      await alert.present();
    }

}
