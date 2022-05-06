import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Movimentacao } from 'src/app/shared/models/movimentacao';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  apiUrl: string = environment.apiURLBase + '/movimentacoes';

  constructor(private http: HttpClient) { }

  list(): Observable<Movimentacao[]> {
    return this.http
      .get<Movimentacao[]>(this.apiUrl)
      .pipe(take(1));
  }

  findByIdConta(contaId: number): Observable<Movimentacao[]> {
    return this.http
      .get<Movimentacao[]>(`${this.apiUrl}/${contaId}`)
      .pipe(take(1));
  }

  createUpdate(movimentacao: Movimentacao): Observable<Movimentacao> {
    return movimentacao.id
      ? this.http.put<Movimentacao>(`${this.apiUrl}/${movimentacao.id}`, movimentacao).pipe(take(1))
      : this.http.post<Movimentacao>(this.apiUrl, movimentacao).pipe(take(1));
  }

}
