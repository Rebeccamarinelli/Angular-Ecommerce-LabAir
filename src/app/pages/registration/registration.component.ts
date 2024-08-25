import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ripetiPassword } from '../../services/validators/validator.password';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  // passVisibile:boolean;
  // inputVisibile:boolean;
  // @ViewChild('par') error:ElementRef<HTMLParagraphElement>

  // constructor(private route:Router){
  //   this.route.events.subscribe((event) => {
  //     if(event instanceof NavigationEnd && event.url === '/auth/register'){
  //       this.inputVisibile = true
  //       this.passVisibile = false
  //     }else if(event instanceof NavigationEnd && event instanceof NavigationEnd && event.url === '/auth/login'){
  //       this.inputVisibile = false
  //       this.passVisibile = true
  //     }
  //   })
  // }

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
      console.log('ciao')
  }



}
