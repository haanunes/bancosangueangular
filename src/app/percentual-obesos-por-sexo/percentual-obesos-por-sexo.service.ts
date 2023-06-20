import { Injectable } from '@angular/core';
import { PercentualObesosPorSexo } from './percentual-obesos-por-sexo';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PercentualObesosPorSexoService {
  private readonly API_REST = 'http://192.168.1.17:8080/percentualObesosPorSexo';

  constructor(private httpClient:HttpClient) { }

  list() {
    return this.httpClient.get<PercentualObesosPorSexo[]>(this.API_REST)
    .pipe(
      
      tap(doadores=> console.log(doadores))
    );
  }
}
