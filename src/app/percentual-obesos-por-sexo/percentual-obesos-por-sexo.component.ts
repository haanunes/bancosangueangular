import { Component, OnInit } from '@angular/core';
import { PercentualObesosPorSexoService } from './percentual-obesos-por-sexo.service';
import { PercentualObesosPorSexo } from './percentual-obesos-por-sexo';

@Component({
  selector: 'app-percentual-obesos-por-sexo',
  templateUrl: './percentual-obesos-por-sexo.component.html',
  styleUrls: ['./percentual-obesos-por-sexo.component.scss']
})
export class PercentualObesosPorSexoComponent implements OnInit {

 
  PercentualObesosPorSexo : PercentualObesosPorSexo [];

  constructor( private percentualObesosPorSexoService : PercentualObesosPorSexoService){

    this.percentualObesosPorSexoService.list().subscribe(dados => this.PercentualObesosPorSexo=dados);
    
  }

  ngOnInit(): void {
  }

}
