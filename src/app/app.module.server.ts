import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
