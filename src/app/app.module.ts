import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderBannerFirstComponent } from './components/header-banner-first/header-banner-first.component';
import { HeaderBannerScdComponent } from './components/header-banner-scd/header-banner-scd.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderShoeComponent } from './components/slider-shoe/slider-shoe.component';
import { SliderSportComponent } from './components/slider-sport/slider-sport.component';
import { SliderMemberComponent } from './components/slider-member/slider-member.component';
import { FooterBComponent } from './components/footer-b/footer-b.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarProductMenuComponent } from './components/sidebar-product-menu/sidebar-product-menu.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductDitailComponent } from './components/product-ditail/product-ditail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartAsideComponent } from './components/cart-aside/cart-aside.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutFormComponent } from './pages/checkout-form/checkout-form.component';
import { CheckAsideComponent } from './components/check-aside/check-aside.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBannerFirstComponent,
    HeaderBannerScdComponent,
    HomeComponent,
    HomeHeroComponent,
    FooterComponent,
    SliderShoeComponent,
    SliderSportComponent,
    SliderMemberComponent,
    FooterBComponent,
    ProductsComponent,
    SidebarProductMenuComponent,
    CardProductComponent,
    ProductDitailComponent,
    CartComponent,
    CartItemComponent,
    CartAsideComponent,
    LoginComponent,
    CheckoutFormComponent,
    CheckAsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
