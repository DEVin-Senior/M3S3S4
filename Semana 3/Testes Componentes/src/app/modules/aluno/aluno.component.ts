import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  today = new Date('2022-07-11 00:00:00');

  ngOnInit(): void {
  }

  isToday(data: Date) {
    return data.getTime() === this.today.getTime();
  }

  mesmoMes(data: Date) {
    return new Date().getMonth() === data.getMonth();
  }
}
