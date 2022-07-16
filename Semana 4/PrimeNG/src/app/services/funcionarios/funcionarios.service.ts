import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor() { }

  getFuncionarios(): Funcionario[] {
    const funcionariosString = localStorage.getItem("funcionarios");
    const funcionarios = funcionariosString ? JSON.parse(funcionariosString) : [];
    return funcionarios;
  }

  newFuncionario(funcionario: Funcionario) {
    const funcionarios = this.getFuncionarios();
    funcionario.id = uuid(); 
    funcionarios.push(funcionario);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
  }

  getFuncionarioById(id: string){
    //..
  }

  deleteFuncionario(id: string) {
    //...
  }

}
