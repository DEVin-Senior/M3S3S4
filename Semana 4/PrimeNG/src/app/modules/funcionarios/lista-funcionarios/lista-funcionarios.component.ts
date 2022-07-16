import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from 'src/app/services/funcionarios/funcionarios.service';
import { Funcionario } from 'src/app/services/models/funcionario.model';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.scss']
})
export class ListaFuncionariosComponent implements OnInit {

  constructor(
    private router: Router,
    private funcionarioService: FuncionariosService
    ) { }

  funcionarios: Funcionario[] = [];

  ngOnInit(): void {
    //this.mock();
    this.funcionarios = this.funcionarioService.getFuncionarios();
  }

  openCadastrar() {
    this.router.navigate(['/funcionarios/funcionario']);
  }

  /*mock() {
    const fun1 = {
      nome: "Gilmar",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "Desenv",
      ativo: true
    }

    const fun2 = {
      nome: "Gilmar",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "Desenv",
      ativo: true
    }

    this.funcionarioService.newFuncionario(fun1);
    this.funcionarioService.newFuncionario(fun2);
  }*/

}
