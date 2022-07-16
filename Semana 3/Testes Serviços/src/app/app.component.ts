import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula01';

  arrayDeObj = [{a: 1, b: 2}, {a: 4, b: 3}]

  save() {
    localStorage.setItem("objeto", JSON.stringify(this.arrayDeObj));
  }

  imprimirObj() {
    const obj = localStorage.getItem("objeto");
    console.log(obj ? JSON.parse(obj)[0].a : "")
  }
}
