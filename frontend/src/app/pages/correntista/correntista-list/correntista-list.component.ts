import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { Correntista } from 'src/app/shared/models/correntista';

import { CorrentistaService } from 'src/app/shared/services/correntista.service';


@Component({
  selector: 'app-correntista-list',
  templateUrl: './correntista-list.component.html'
})
export class CorrentistaListComponent implements OnInit {

  correntistas : Correntista[] = [];

  constructor(
    private correntistaService: CorrentistaService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  exibirCorrentistas(): void {

    this.spinner.show();

    this.correntistaService.list().subscribe(

      (correntistas : any) => {
        this.correntistas = correntistas.data as Correntista[];
      },
      (err: any) => {
        console.log(err);
      }
    ).add(() => this.spinner.hide());
  }

}
