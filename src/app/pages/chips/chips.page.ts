import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.page.html',
  styleUrls: ['./chips.page.scss'],
})
export class ChipsPage implements OnInit {

  @ViewChild('chipView') chipPage:Element;
  constructor() { }

  ngOnInit() {
  }

  cerrarchip(){
    this.chipPage.remove;
    console.log("No se cierra en Ionic 4. Solo encuentro cómo hacerlo en Ionic 3")
  }
}
