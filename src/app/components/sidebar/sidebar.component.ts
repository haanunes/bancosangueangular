import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
 
    { path: '/doadores-por-estado', title: 'Doadores por estado',  icon:'person', class: '' },
    { path: '/media-idade-grupo-sanguineo', title: 'Média de Idade por Grupo',  icon:'group', class: '' },
    { path: '/percentual-obesos-por-sexo', title: 'Obesos por sexo',  icon:'wc', class: '' }
    
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
