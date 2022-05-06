import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovimentacaoFormComponent } from './movimentacao-form/movimentacao-form.component';
import { MovimentacaoListComponent } from './movimentacao-list/movimentacao-list.component';


const routes: Routes = [
  { path: 'movimentacoes-new', component: MovimentacaoFormComponent },
  { path: 'movimentacoes', component: MovimentacaoListComponent },
  { path: '', redirectTo: 'movimentacoes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MovimentacaoRoutingModule { }


