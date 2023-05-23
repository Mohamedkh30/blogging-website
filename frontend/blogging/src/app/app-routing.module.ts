import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundErrorComponent } from './error/not-found-error/not-found-error.component';
import { AuthorsComponent } from './authors/authors.component';
import { TopicPageComponent } from './topic/topic-page/topic-page.component';
import { AuthorPageComponent } from './authors/author-page/author-page.component';
import { SignInPageComponent } from './auth/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './auth/sign-up-page/sign-up-page.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'Authors',component:AuthorsComponent},
  {path:'SignIn',component:SignInPageComponent},
  {path:'SignUp',component:SignUpPageComponent},
  {path:'Authors',component:AuthorsComponent},
  {path:'Authors/:id',component:AuthorPageComponent},
  {path:'topic/:id',component:TopicPageComponent},
  {path:'**',component:NotFoundErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
