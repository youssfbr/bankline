import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { MovimentacaoListComponent } from './movimentacao-list/movimentacao-list.component';
import { MovimentacaoFormComponent } from './movimentacao-form/movimentacao-form.component';


@NgModule({
  imports: [
    CommonModule,
    MovimentacaoRoutingModule,
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
    MovimentacaoListComponent,
    MovimentacaoFormComponent
  ],
  exports: [
    MovimentacaoListComponent,
    MovimentacaoFormComponent
  ]
})
export class MovimentacaoModule { }
