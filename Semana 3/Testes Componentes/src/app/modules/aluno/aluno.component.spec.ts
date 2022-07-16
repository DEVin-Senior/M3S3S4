import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoComponent } from './aluno.component';

describe('AlunoComponent', () => {
  let component: AlunoComponent;
  let fixture: ComponentFixture<AlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${AlunoComponent.prototype.isToday.name} deve ser true quando passado a data de hoje!`, () => {
    const hoje = new Date("2022-07-11 00:00:00");
    expect(component.isToday(hoje)).toBeTrue();
  });

  it(`#${AlunoComponent.prototype.isToday.name} deve ser false quando passado outra data não sendo hoje!`, () => {
    const ontem = new Date("2022-07-10 00:00:00");
    expect(component.isToday(ontem)).toBeFalse();
  });
});
