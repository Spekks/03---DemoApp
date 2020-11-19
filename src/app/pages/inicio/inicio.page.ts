import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*public misBotones:Boton[] = [
    {
      nombre: 'action-sheet',
      ruta: '/action-sheet',
      color: 'primary',
      icono: 'magnet'
    },
    {
      nombre: 'alert',
      ruta: '/alert',
      color: 'primary',
      icono: 'alert'
    },
    {
      nombre: 'usuarios',
      ruta: '/usuarios',
      color: 'success',
      icono: 'add'
    },
  ]*/
  constructor() { }

  ngOnInit() {
    //this.misBotones;
  }

}
