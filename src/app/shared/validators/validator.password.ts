import { AbstractControl, ValidationErrors } from "@angular/forms";

export const ripetiPassword = (form: AbstractControl):null | ValidationErrors =>{
 const password = form.get('password').value;
 const ripetiPassword = form.get('ripetiPassword').value;

 if(password === ripetiPassword){
    return null
 }else{
    return {
        ripetiPasswordErr:true
    }
 }

}
