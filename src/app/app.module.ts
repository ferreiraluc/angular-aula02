import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoalistComponent } from './app/pessoa/pessoalist/pessoalist.component';
import { MenuSuperiorComponent } from './layout/menu-superior/menu-superior.component';
import { ListagemPessoasComponent } from './pessoas/listagem-pessoas/listagem-pessoas.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoalistComponent,
    MenuSuperiorComponent,
    ListagemPessoasComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
