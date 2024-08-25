import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ripetiPassword } from '../../shared/validators/validator.password';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ILoginInfo } from '../../models/models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  
   constructor(private auth:AuthService, private route:Router){ }

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    ripetiPassword: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)])
  },
  {
    validators:[ripetiPassword]
  }

)

  onRegister(){
      console.log(this.registerForm)
    
      const newUser: ILoginInfo = {
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value
      }

      this.auth.registration(newUser).subscribe((res)=>{
        console.log(res)
        this.route.navigate(['auth', 'login'])
      })
  }



}
