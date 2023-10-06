import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listagem-carros',
  templateUrl: './listagem-carros.component.html',
  styleUrls: ['./listagem-carros.component.scss']
})
export class ListagemCarrosComponent {

  modalService = inject(NgbModal);

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

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });

}

  addNaLista(carro: Carro){
    this.carros.push(carro);
    this.modalService.dismissAll();
  }

}