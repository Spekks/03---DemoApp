import { Component, OnInit } from '@angular/core';
import { ActionSheetController, iosTransitionAnimation } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {

  constructor(public actionSheetController: ActionSheetController) { }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Opciones',
        backdropDismiss: false,
        mode: 'md',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            cssClass: 'rojo',
            handler: () => {
              console.log('Delete clicked');
            }
          }, 
          {
            text: 'Share',
            icon: 'share',
            handler: () => {
              console.log('Share clicked');
            }
          }, 
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
    
      await actionSheet.present();
  }

}
