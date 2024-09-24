import { Component} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrl: './log-on.component.scss'
})
export class LogOnComponent {

  constructor(
    private route:Router,
    private auth:AuthService){}

  emailPattern:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  isVisible:boolean =  true;
  password:string = 'password'
  errorMessage:string = ''
  errorMessageScd:string = ''

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required]),
  }, 
)

  onLogin():void{
     // console.log(this.registerForm.value)

      this.auth.login(this.registerForm.value).subscribe((res)=>{
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        this.route.navigate(['dashboard'])
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

 



}
