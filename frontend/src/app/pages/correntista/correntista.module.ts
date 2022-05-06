import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CorrentistaRoutingModule } from './correntista-routing.module';

import { CorrentistaFormComponent } from './correntista-form/correntista-form.component';
import { CorrentistaListComponent } from './correntista-list/correntista-list.component';


@NgModule({
  imports: [
    CommonModule,
    CorrentistaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
    TooltipModule.forRoot(),
  ],
  declarations: [
    CorrentistaListComponent,
    CorrentistaFormComponent
  ],
  exports: [
    CorrentistaListComponent,
    CorrentistaFormComponent
  ]
})
export class CorrentistaModule { }
