import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    ListaFuncionariosComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ]
})
export class FuncionariosModule { }
