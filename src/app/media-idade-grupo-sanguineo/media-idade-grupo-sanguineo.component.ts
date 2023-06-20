import { Component, OnInit } from '@angular/core';
import { MediaIdadeGrupoSanguineoService } from './media-idade-grupo-sanguineo.service';
import { MediaIdadeGrupoSanguineo } from './media-idade-grupo-sanguineo';

@Component({
  selector: 'app-media-idade-grupo-sanguineo',
  templateUrl: './media-idade-grupo-sanguineo.component.html',
  styleUrls: ['./media-idade-grupo-sanguineo.component.scss']
})
export class MediaIdadeGrupoSanguineoComponent {

   
  mediaIdadeGrupoSanguineo : MediaIdadeGrupoSanguineo [];

  constructor( private mediaIdadeGrupoSanguineoService : MediaIdadeGrupoSanguineoService){

    this.mediaIdadeGrupoSanguineoService.list().subscribe(dados => this.mediaIdadeGrupoSanguineo=dados);
    
  }

}
