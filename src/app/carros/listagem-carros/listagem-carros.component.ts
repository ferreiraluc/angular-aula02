import { Component } from '@angular/core';
import { Carro } from '../carro';


@Component({
  selector: 'app-listagem-carros',
  templateUrl: './listagem-carros.component.html',
  styleUrls: ['./listagem-carros.component.scss']
})
export class ListagemCarrosComponent {

  carros: Carro [] = [
    new Carro('Uno', 1998),
    new Carro('Fusca', 1970),
    new Carro('Gol', 2000),
    new Carro('Fiat 147', 1980),
    new Carro('Opala', 1975),
    new Carro('Chevette', 1980),
  ]  

  constructor() { 
    
  }



}
