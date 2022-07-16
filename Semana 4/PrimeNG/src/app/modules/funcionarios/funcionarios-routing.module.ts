import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';

const routes: Routes = [
  { path: 'listar', component: ListaFuncionariosComponent },
  { path: 'funcionario', component: FuncionarioComponent },
  { path: 'funcionario/:id', component: FuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
