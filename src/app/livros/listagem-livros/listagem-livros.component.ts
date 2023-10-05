import { Component } from '@angular/core';
import { Livro } from '../../livros.model';

@Component({
  selector: 'app-listagem-livros',
  templateUrl: './listagem-livros.component.html',
  styleUrls: ['./listagem-livros.component.scss']
})
export class ListagemLivrosComponent {
  
  livros: Livro [] = [
    new Livro('O Senhor dos Anéis', 'J. R. R. Tolkien'),
    new Livro('O Código da Vinci', 'Dan Brown'),
    new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry'),
  ]

  constructor() { 
    
  }


}
