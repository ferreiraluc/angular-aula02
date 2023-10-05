import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemPessoasComponent } from './pessoas/listagem-pessoas/listagem-pessoas.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { ListagemCarrosComponent } from './carros/listagem-carros/listagem-carros.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { ListagemLivrosComponent } from './livros/listagem-livros/listagem-livros.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent}, 
  { path: "admin", component: IndexComponent, children: [
      { path: "pessoas", component: ListagemPessoasComponent },
      { path: "pessoas/novo", component: PessoasdetailsComponent},
      {path: "pessoas/editar/:id", component: PessoasdetailsComponent},
      { path: 'carros', component: ListagemCarrosComponent },
      { path: 'carros/:id', component: CarrosdetailsComponent },
      { path: 'livros', component: ListagemLivrosComponent },
      { path: 'livros/:id', component: LivrosdetailsComponent },
      
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
