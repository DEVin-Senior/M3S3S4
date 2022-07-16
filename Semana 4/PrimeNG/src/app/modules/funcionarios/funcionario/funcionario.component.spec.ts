import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioComponent } from './funcionario.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('FuncionarioComponent', () => {
  let component: FuncionarioComponent;
  let fixture: ComponentFixture<FuncionarioComponent>;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioComponent ],
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
    
    fixture = TestBed.createComponent(FuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar erro quando não informado os dados válidos para o funcionário', () => {
    expect(() => component.salvar()).toThrowError();
  });

  it('Deve retornar success quando formulário estiver com dados e válido', () => {
    component.formFun.patchValue({
      nome: 'Gilmar',
      funcao: 'desenv',
      dataNascimento: new Date()
    });

    expect(component.formFun.invalid).toBeFalse();
  });
  
  it('Deve retornar inválido quando formulário não estiver totalmente preenchido', () => {
    component.formFun.patchValue({
      nome: 'Gilmar',
      dataNascimento: new Date()
    });

    expect(component.formFun.invalid).toBeTrue();
  });

  it('Deve salvar registro quando formulário estiver válido', () => {
    component.formFun.patchValue({
      nome: 'Gilmar Teste!!!!',
      dataNascimento: new Date(),
      funcao: 'desenv'
    });
    expect(() => component.salvar()).not.toThrowError();
  });

});
