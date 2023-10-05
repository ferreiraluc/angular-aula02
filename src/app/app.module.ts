import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { MenuSuperiorComponent } from './layout/menu-superior/menu-superior.component';
import { ListagemPessoasComponent } from './pessoas/listagem-pessoas/listagem-pessoas.component';
import { HeaderComponent } from './layout/header/header.component';
import { ListagemCarrosComponent } from './carros/listagem-carros/listagem-carros.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { ListagemLivrosComponent } from './livros/listagem-livros/listagem-livros.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuSuperiorComponent,
    ListagemPessoasComponent,
    HeaderComponent,
    ListagemCarrosComponent,
    CarrosdetailsComponent,
    ListagemLivrosComponent,
    LivrosdetailsComponent,
    FooterComponent,
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
