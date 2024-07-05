import { Component } from '@angular/core';
import { FormControl,FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,private auth:AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      //username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      //confirmPassword: ['',[Validators.required]]
    },
    //{ validator: this.passwordMatchValidator }
   );
  }
  
 // passwordMatchValidator(form: FormGroup) {
  //  return form.get('password')?.value === form.get('confirmPassword')?.value
   //   ? null : { 'mismatch': true };
  

  
  
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      const registerFormValue = this.registerForm.value;
      console.log('Form Submitted!', registerFormValue);
      console.log('Form Submitted!', registerFormValue.email);
      console.log('Form Submitted!', registerFormValue.password);

      this.auth.register(registerFormValue.email,registerFormValue.password).subscribe(
        {
          next: (res) => {
        console.log(res)
            this.router.navigateByUrl('signin')
        },
         error: (err: any) => {
          console.log(err)
        
        }
      })
    } else {
      console.log('Form not valid');
    
    }
  }

}

