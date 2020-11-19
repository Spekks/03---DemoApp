import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { FabbuttonComponent } from './fabbutton/fabbutton.component';



@NgModule({
  declarations: [CabeceraComponent, FabbuttonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
    FabbuttonComponent
  ]
})
export class ComponentsModule { }
