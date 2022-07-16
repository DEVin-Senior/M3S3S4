import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './modules/formulario/formulario.component';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import {TableModule} from 'primeng/table';
import { AlunoComponent } from './modules/aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
