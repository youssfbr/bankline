import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Movimentacao } from 'src/app/shared/models/movimentacao';
import { Correntista } from 'src/app/shared/models/correntista';

import { CorrentistaService } from 'src/app/shared/services/correntista.service';
import { MovimentacaoService } from 'src/app/shared/services/movimentacao.service';


@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html'
})
export class MovimentacaoListComponent implements OnInit {

  movimentacoes            : Movimentacao[] = [];
  correntistas             : Correntista[] = [];
  correntistaIdSelecionado : number = 0
  correntistaMensagem      : string = 'Selecione o correntista e clique em buscar.';

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
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
        this.error(err, 'Ocorreu um erro!')
      }
    ).add(() => this.spinner.hide());
  }

  listMovimentacoes(): void {

    if (this.correntistaIdSelecionado) {

      this.spinner.show();

      this.movimentacaoService.findByIdConta(this.correntistaIdSelecionado).subscribe(

        (movimentacoes: Movimentacao[]) => {

          this.movimentacoes = movimentacoes as Movimentacao[];

          if (movimentacoes.length === 0) {
            this.correntistaMensagem = 'Nenhuma movimentação encontrada.';
          }
        },
        (err: any) => {
          console.log(err);
          this.error(err, 'Ocorreu um erro!')
        }
      ).add(() => this.spinner.hide());
    }
  }

  private error(err?: any, msg?: string): void {

    console.log(err);

    this.toastr.clear();
    this.toastr.toastrConfig.disableTimeOut = true;

    (err.error.erros)
        ? err.error.erros.forEach((errors?: any) => {
          this.toastr.error(errors, 'Erro!')
        })
        : this.toastr.error(msg, 'Erro!');
  }

}
