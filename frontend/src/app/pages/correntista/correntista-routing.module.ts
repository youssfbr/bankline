import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorrentistaFormComponent } from './correntista-form/correntista-form.component';
import { CorrentistaListComponent } from './correntista-list/correntista-list.component';


const routes: Routes = [
  { path: 'correntista-new', component: CorrentistaFormComponent },
  { path: 'correntistas', component: CorrentistaListComponent },
  { path: '', redirectTo: 'correntistas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CorrentistaRoutingModule { }


