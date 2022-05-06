import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Correntista } from 'src/app/shared/models/correntista';

import { CorrentistaService } from 'src/app/shared/services/correntista.service';

@Component({
  selector: 'app-correntista-form',
  templateUrl: './correntista-form.component.html'
})
export class CorrentistaFormComponent implements OnInit {

  correntista  : Correntista = {} as Correntista;
  name         : string = 'Correntista';

  constructor(
    private correntistaService: CorrentistaService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.fb.group({
    cpf: [''],
    nome: ['']
  });

  onSubmit(form: FormGroup, navigate = true): void {

    this.spinner.show();

    if (form.dirty && form.valid) {

      this.correntista = Object.assign({}, this.correntista, this.form.value);

      this.correntistaService.createUpdate(this.correntista).subscribe(

        (correntistaResponse: Correntista) => {

          this.toastr.clear();
          this.toastr.toastrConfig.disableTimeOut = false;
          this.toastr.success(this.name + ' salva.');

          this.correntista = Object.assign({}, this.correntista, correntistaResponse);

          if (navigate) this.router.navigate(['/correntistas']);
        },
        (err: any) => {
          this.error(err, 'Ocorreu um erro ao salvar/atualizar!')
      }
      ).add(() => this.spinner.hide());
    }

  }

  private error(err?: any, msg?: string): void {

    console.log(err.error.data);

    this.toastr.clear();
    this.toastr.toastrConfig.disableTimeOut = true;
  }

}
