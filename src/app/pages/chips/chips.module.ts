import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipsPageRoutingModule } from './chips-routing.module';

import { ChipsPage } from './chips.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChipsPage]
})
export class ChipsPageModule {}
