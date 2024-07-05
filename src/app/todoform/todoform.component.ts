import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  
  constructor(private router: Router) { }
 navigatetotask()
 {
  this.router.navigateByUrl('task');
 }
}
