import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { AuthorCardComponent } from './authorcard/Authorcard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthorCardComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    AuthorCardComponent,

    RouterModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
