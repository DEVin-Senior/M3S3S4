import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [
      {
        label: 'Funcionarios',
        url: "/funcionarios/listar"
      },
      {
        label: 'Atividades',
        url: "/atividades/listar"
      },
      {
        label: 'Horas',
        url: "/horas"
      },
  ];
  
  ngOnInit(): void {
  }

}
