import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DoadoresPorEstadoComponent } from './doadores-por-estado/doadores-por-estado.component';
import { MediaIdadeGrupoSanguineoComponent } from './media-idade-grupo-sanguineo/media-idade-grupo-sanguineo.component';
import { PercentualObesosPorSexoComponent } from './percentual-obesos-por-sexo/percentual-obesos-por-sexo.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PercentualObesosPorSexoComponent,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
