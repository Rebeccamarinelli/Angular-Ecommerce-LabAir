import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderBannerFirstComponent } from './components/header-banner-first/header-banner-first.component';
import { HeaderBannerScdComponent } from './components/header-banner-scd/header-banner-scd.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBannerFirstComponent,
    HeaderBannerScdComponent,
    HomeComponent,
    HomeHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
