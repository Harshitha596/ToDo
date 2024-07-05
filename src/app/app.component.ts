import { Component,ViewEncapsulation } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  heading:string="todoapp";

  constructor(private auth: AuthService) {}
}
