import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'signin' , component:SigninComponent
  },
  {
    path:'signup' , component:SignupComponent
  },
  {
    path:'todoform' ,component:TodoformComponent
  },
  {
    path: 'task' ,component:TaskComponent
  },
  {
    path: 'header',component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
