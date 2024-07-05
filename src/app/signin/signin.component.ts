import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private auth:AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    },
   );
  }
  
  onSubmit() {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      console.log("Submitting");
      console.log('Form Submitted!', this.loginForm.value);
      const loginFormValue=this.loginForm.value
      console.log('Form Submitted!',loginFormValue);
      console.log('Form Submitted!',loginFormValue.email);
    console.log('Form Submitted!',loginFormValue.password)
  this.auth.login(loginFormValue.email,loginFormValue.password).subscribe(
    {
      next: (res: any) => { 
        console.log(res)

        localStorage.setItem('user_id', res.data.user.id)
    
        console.log(localStorage.getItem('user_id'))
        if(res.error === null){
        this.router.navigateByUrl("/todoform")
      
        }
    },
     error: (err: any) => {
      console.log(err)
    }
  })

    }
    else {
      console.log('Form not valid');
    }
  };
}