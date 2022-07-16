import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Funcionario } from "../model/Funcionario";
import { FormularioRoutingModule } from "./formulario-routing.module";
import { FormularioComponent } from "./formulario.component";

describe(FormularioComponent.name, () => {

  let fixture: ComponentFixture<FormularioComponent>;
  let component: FormularioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[],
      imports: [
        CommonModule,
        FormularioRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Deve criar`, () => {
    expect(component).toBeTruthy();
  });

  it(`Deve retornar 1 funcionário quando cadastrado`, () => {
    component.formFun.patchValue({
      nome: "Gilmar",
      email: "gilmar@teste.com.br",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "diretor"
    });

    component.salvar();
    expect(1).toBe(component.funcionarios.length);
  });

  it(`Deve retornar erro quando salvar sem o form válido`, () => {
    component.formFun.patchValue({
      nome: "Gilmar",
      email: "gilmar@teste.com.br",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      cargo: "diretor"
    });
    expect(() => component.salvar()).toThrow();
  });

  it(`Deve retornar 1 quando salvo 2 e removido o ultimo`, () => {
    component.formFun.patchValue({
      nome: "Gilmar",
      email: "gilmar@teste.com.br",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "diretor"
    });

    component.salvar();

    component.formFun.patchValue({
      nome: "Gilmar 2",
      email: "gilmar@teste.com.br",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "diretor"
    });

    component.salvar();    

    component.delete();

    expect(1).toBe(component.funcionarios.length)
  });

  it(`#${FormularioComponent.prototype.editar.name} deve editar o primeiro registro quando inserido novos dados`, () => {
    component.formFun.patchValue({
      nome: "Gilmar 2",
      email: "gilmar@teste.com.br",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "diretor"
    });

    component.salvar();

    component.editar({
      nome: "Gilmar",
      email: "gilmar@teste.com.br",
      dataNascimento: new Date('1999-01-01 00:00:00'),
      funcao: "diretor"
    } as Funcionario);

    const nome: String = (component.funcionarios && component.funcionarios.length > 0 && component.funcionarios[0].nome) ? component.funcionarios[0].nome : '';
    expect("Gilmar").toEqual(nome);
  });

  





});
