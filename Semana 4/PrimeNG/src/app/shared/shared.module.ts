import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
