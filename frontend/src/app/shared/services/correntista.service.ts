import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Correntista } from './../models/correntista';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  apiUrl: string = environment.apiURLBase + '/correntistas';

  constructor(private http: HttpClient) { }

  list(): Observable<Correntista[]> {
    return this.http
      .get<Correntista[]>(this.apiUrl)
      .pipe(take(1));
  }

  createUpdate(correntista: Correntista): Observable<Correntista> {
    return correntista.id
      ? this.http.put<Correntista>(`${this.apiUrl}/${correntista.id}`, correntista).pipe(take(1))
      : this.http.post<Correntista>(this.apiUrl, correntista).pipe(take(1));
  }

}
