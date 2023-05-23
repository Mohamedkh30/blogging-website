import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AuthorsModule } from './authors/authors.module';
import { TopicModule } from './topic/topic.module';
import { ErrorModule } from './error/error.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,SharedModule,TopicModule,ErrorModule,AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
