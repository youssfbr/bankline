import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class TemplateModule { }
