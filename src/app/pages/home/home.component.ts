import { Component} from '@angular/core';
import { shoes } from '../../data/data';
import { sport } from '../../data/data';
import { singleShoe } from '../../models/models';
import { membership } from '../../data/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
   

  shoes:singleShoe[] = shoes;
  sport:any = sport
  member:any = membership
 
  
 


}
