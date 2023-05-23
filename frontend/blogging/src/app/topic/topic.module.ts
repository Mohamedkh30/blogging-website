import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [
    TopicPageComponent,
    TopicComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[]
})
export class TopicModule { }
