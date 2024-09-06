import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loading:boolean;

  constructor(private spinner:NgxSpinnerService){}


  hideSpinner():void{
    setTimeout(()=>{
      this.spinner.hide(); 
      this.loading = false;
    },200)
  }

  showSpinner():void{
    this.loading = true;
    this.spinner.show();
  }


}
