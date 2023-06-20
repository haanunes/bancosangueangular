import { Component, OnInit } from '@angular/core';
import { DoadoresPorEstadoService } from './doadores-por-estado.service';
import { DoadoresPorEstado } from './doadores-por-estado';
import { Observable, catchError, of } from 'rxjs';

@Component({
    selector: 'app-doadores-por-estado',
  templateUrl: './doadores-por-estado.component.html',
  styleUrls: ['./doadores-por-estado.component.scss']
})
export class DoadoresPorEstadoComponent{

 
  
  doadoresPorEstado : DoadoresPorEstado [];

  constructor( private doadoresService : DoadoresPorEstadoService){

    this.doadoresService.list().subscribe(dados => this.doadoresPorEstado=dados);
    
  }
}
