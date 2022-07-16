import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/inicio/inicio.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'funcionarios', loadChildren: () => import('./modules/funcionarios/funcionarios.module').then(m => m.FuncionariosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
