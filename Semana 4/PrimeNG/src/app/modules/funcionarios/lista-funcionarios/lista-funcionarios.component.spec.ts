import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuncionariosComponent } from './lista-funcionarios.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FuncionariosService } from 'src/app/services/funcionarios/funcionarios.service';

describe('ListaFuncionariosComponent', () => {
  let component: ListaFuncionariosComponent;
  let funcionarioService: FuncionariosService;
  let fixture: ComponentFixture<ListaFuncionariosComponent>;

  beforeEach(async () => {
    localStorage.clear();
    funcionarioService = new FuncionariosService();

    await TestBed.configureTestingModule({
      declarations: [
        ListaFuncionariosComponent,        
      ],
      imports: [
        CommonModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        DropdownModule,
        ReactiveFormsModule,
        FormsModule,
        ToastModule,
        AppRoutingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFuncionariosComponent);
    component = fixture.componentInstance;
    //fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve conter dois funcionarios quando salvo dois registros', () => {
    funcionarioService.newFuncionario({
      nome: "TEste 1",
      funcao: 'xpto',
      dataNascimento: new Date()
    });

    funcionarioService.newFuncionario({
      nome: "TEste 2",
      funcao: 'xpto',
      dataNascimento: new Date()
    });

    fixture.detectChanges();

    expect(2).toBe(component.funcionarios.length);
  });
});
