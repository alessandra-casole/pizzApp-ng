import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './feature/home/home.component';
import { MenuComponent } from './feature/menu/menu.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CartComponent } from './feature/cart/cart.component';
import { PizzasComponent } from './feature/pizzas/pizzas.component';
import { PizzaDetailsComponent } from './feature/pizza-details/pizza-details.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    CartComponent,
    PizzasComponent,
    PizzaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
