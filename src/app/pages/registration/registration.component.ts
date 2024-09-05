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
  
   constructor(
    private auth:AuthService,
    private route:Router){}

  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  isVisible:boolean =  true;
  isVisibleScd:boolean =  true;
  password:string = 'password'
  passwordScd:string = 'password'

  registerForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl<string>('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    ripetiPassword: new FormControl<string>('', [Validators.required, Validators.pattern(this.passwordPattern)])
  },
  {
    validators:[ripetiPassword]
  }

)

  onRegister(): void{
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

  showPassword(): void{
    this.isVisible = !this.isVisible
    if(this.isVisible){
      this.password = 'password'
    }else{
      this.password = 'text'
    }
  }

  showPasswordScd(): void{
    this.isVisibleScd = !this.isVisibleScd
    if(this.isVisibleScd){
      this.passwordScd = 'password'
    }else{
      this.passwordScd = 'text'
    }
  }


}
