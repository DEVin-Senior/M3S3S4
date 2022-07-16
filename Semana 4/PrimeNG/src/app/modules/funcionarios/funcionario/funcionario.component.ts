import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionariosService } from 'src/app/services/funcionarios/funcionarios.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss'],
  providers: [MessageService]
})
export class FuncionarioComponent implements OnInit {
  
  formFun: FormGroup;

  funcoes = ["Desenv", "Gerente", "Diretor"]
  
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionariosService,
    private messageService: MessageService
  ) { 
    this.formFun = this.formBuilder.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      funcao: ['', Validators.required],
      ativo: true
    });
  }
  
  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/funcionarios/listar']);
  }

  salvar() {    
    if (this.formFun.invalid) {
      this.notify("error", "Erro!", "Dados inválido!");
      throw new Error("Funcionário inválido!");
    }
    
    this.funcionarioService.newFuncionario(this.formFun.getRawValue());
    this.formFun.reset();
    this.notify("success", "Sucesso!", "Funcionário cadastrado com sucesso!");
  }

  notify(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity, 
      summary: summary, 
      detail: detail,
      life: 2000
    });
  }

}
