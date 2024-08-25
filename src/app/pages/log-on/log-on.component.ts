import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ripetiPassword } from '../../services/validators/validator.password';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrl: './log-on.component.scss'
})
export class LogOnComponent {


  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  registerForm: FormGroup = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    passwordLogin: new FormControl('', [Validators.required]),
  },
  
)

  onRegister(){
      console.log(this.registerForm)
      console.log('ciao')
  }



}
