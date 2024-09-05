import { Component} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


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
      },
      (error:HttpErrorResponse) => {
        //console.log(error)
        // Gestisce l'errore ricevuto dal servizio
        if(error.status === 500){
          this.errorMessage = 'Errore 500 Internal Server Error'
        }else if(error.status === 0){
          this.errorMessage = 'Errore 400 Non è possibile al momento accedere alla dashboard siamo spiacenti'
          this.auth.logout()
        }else if(error.status === 400){
           this.errorMessageScd = 'Password o Email Errata'
          setTimeout(()=>{
            this.errorMessageScd = ''
          }, 3000)
        }
      }
      )

    
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
