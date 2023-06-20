import { Routes } from '@angular/router';



import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { DoadoresPorEstadoComponent } from 'app/doadores-por-estado/doadores-por-estado.component';
import { MediaIdadeGrupoSanguineoComponent } from 'app/media-idade-grupo-sanguineo/media-idade-grupo-sanguineo.component';
import { PercentualObesosPorSexoComponent } from 'app/percentual-obesos-por-sexo/percentual-obesos-por-sexo.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   {path: '',        component: DoadoresPorEstadoComponent},
    { path: 'doadores-por-estado',        component: DoadoresPorEstadoComponent },
    { path: 'media-idade-grupo-sanguineo',        component: MediaIdadeGrupoSanguineoComponent },
    { path: 'percentual-obesos-por-sexo',        component: PercentualObesosPorSexoComponent },



    
];
