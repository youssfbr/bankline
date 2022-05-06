import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Movimentacao } from 'src/app/shared/models/movimentacao';
import { Correntista } from 'src/app/shared/models/correntista';

import { CorrentistaService } from 'src/app/shared/services/correntista.service';
import { MovimentacaoService } from 'src/app/shared/services/movimentacao.service';


@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html'
})
export class MovimentacaoFormComponent implements OnInit {

  correntistas : Correntista[] = [];
  movimentacao : Movimentacao = {} as Movimentacao;
  name         : string = 'Movimentação';
  subtititle   : string = 'Inclusão de uma nova movimentação';

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  form: FormGroup = this.fb.group({
    dataHora: [''],
    contaId: [''],
    descricao: ['' ],
    tipo: [''],
    valor: ['']
  });

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

  onSubmit(form: FormGroup, navigate = true): void {

    this.spinner.show();

    if (form.dirty && form.valid) {

      this.movimentacao = Object.assign({}, this.movimentacao, this.form.value);

      this.movimentacaoService.createUpdate(this.movimentacao).subscribe(

        (movimentacaoResponse: Movimentacao) => {

          this.toastr.clear();
          this.toastr.toastrConfig.disableTimeOut = false;
          this.toastr.success(this.name + ' salva.');

          this.movimentacao = Object.assign({}, this.movimentacao, movimentacaoResponse);

          if (navigate) this.router.navigate(['/movimentacoes']);
        },
        (err: any) => this.error(err, 'Ocorreu um erro ao salvar/atualizar!')

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
