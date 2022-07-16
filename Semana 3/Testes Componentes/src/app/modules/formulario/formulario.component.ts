import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../model/Funcionario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title = "Cadastro de Empregados";
  formFun: FormGroup;
  funcionarios: Funcionario[] = [];

  constructor(formBuilder: FormBuilder) { 
    this.formFun = formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dataNascimento: [new Date(), [Validators.required]],
      funcao: ['', [Validators.required]]    
    });
  }

  ngOnInit(): void {
  }

  salvar() {
    if (this.formFun.invalid) {
      throw new Error("Formulário inválido!");
    }
    
    const funcionario = this.formFun.getRawValue() as Funcionario;
    this.funcionarios.push(funcionario);
    this.formFun.reset();
  }

  delete() {
    this.funcionarios.splice(this.funcionarios.length -1, 1);
  }

  editar(fun: Funcionario) {
    this.funcionarios[0] = fun;
  }

}
