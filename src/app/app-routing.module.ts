import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoalistComponent } from './app/pessoa/pessoalist/pessoalist.component';

const routes: Routes = [
  { path: '', component: PessoalistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
