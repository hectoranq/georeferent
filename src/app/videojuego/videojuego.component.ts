import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent  {

  public juego = 'God of war';
  public mejor_juego_retro = 'Mario 64';
  public mostrar_retro = false;
   public videoJuegos = [
    'los simsoms run',
    'teken'
  ];
}
