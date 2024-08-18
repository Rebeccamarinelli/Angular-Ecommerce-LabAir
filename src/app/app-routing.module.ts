import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDitailComponent } from './components/product-ditail/product-ditail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'products/:id', component: ProductDitailComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
