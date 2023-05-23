import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';

import { SharedModule } from '../shared/shared.module';
import { AuthorPageComponent } from './author-page/author-page.component';

import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorPageComponent,
    
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class AuthorsModule { }
