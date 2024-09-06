import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDitailComponent } from './components/product-ditail/product-ditail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutFormComponent } from './pages/checkout-form/checkout-form.component';
import { CheckThanksComponent } from './components/check-thanks/check-thanks.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LogOnComponent } from './pages/log-on/log-on.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { WrongRouteComponent } from './pages/wrong-route/wrong-route.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'products/:id', component: ProductDitailComponent},
  {path:'cart', component: CartComponent},
  {
    path:'auth',
    component: LoginComponent,
    children: [
      {path:'register', component: RegistrationComponent},
      {path:'login', component: LogOnComponent}
    ]
  },
  {path:'checkout-form', component: CheckoutFormComponent},
  {path:'thanks', component: CheckThanksComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path : '**', pathMatch : 'full', component: WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
