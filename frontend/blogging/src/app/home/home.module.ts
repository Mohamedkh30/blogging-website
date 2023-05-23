import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[CardComponent]
})
export class HomeModule { }
