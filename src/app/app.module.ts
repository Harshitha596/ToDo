import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoformComponent } from './todoform/todoform.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TodoformComponent,
    HeaderComponent,
    TaskComponent,

    LoadingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
