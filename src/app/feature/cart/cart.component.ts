import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService, public pizzaService: PizzasService){}
}
