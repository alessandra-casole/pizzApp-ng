import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  constructor( public pizzaService: PizzasService, public cartService: CartService) {
    pizzaService.getPizzas();
  }
}
