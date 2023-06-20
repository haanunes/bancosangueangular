import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { DoadoresPorEstado } from './doadores-por-estado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoadoresPorEstadoService {

  private readonly API_REST = 'http://192.168.1.17:8080/quantidadeDoadoresPorEstado';

  constructor(private httpClient:HttpClient) { }

  list() {
    return this.httpClient.get<DoadoresPorEstado[]>(this.API_REST)
    .pipe(
      
      tap(doadores=> console.log(doadores))
    );
  }
}
