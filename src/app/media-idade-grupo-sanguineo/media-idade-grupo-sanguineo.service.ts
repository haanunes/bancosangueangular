import { MediaIdadeGrupoSanguineo } from './media-idade-grupo-sanguineo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaIdadeGrupoSanguineoService {
  private readonly API_REST = 'http://192.168.1.17:8080/mediaIdadeGrupoSanguineo';

  constructor(private httpClient:HttpClient) { }

  list() {
    return this.httpClient.get<MediaIdadeGrupoSanguineo[]>(this.API_REST)
    .pipe(
      
      tap(doadores=> console.log(doadores))
    );
  }
}
