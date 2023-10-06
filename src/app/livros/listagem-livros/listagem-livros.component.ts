import { Component, inject } from '@angular/core';
import { Livro } from '../../livros.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listagem-livros',
  templateUrl: './listagem-livros.component.html',
  styleUrls: ['./listagem-livros.component.scss']
})
export class ListagemLivrosComponent {

  modalService = inject(NgbModal);
  
  livros: Livro [] = [
    new Livro('O Senhor dos Anéis', 'J. R. R. Tolkien'),
    new Livro('O Código da Vinci', 'Dan Brown'),
    new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry'),
  ]

  constructor() { 
    
  }

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(livro: Livro){
    this.livros.push(livro);
    this.modalService.dismissAll();
  }
}
