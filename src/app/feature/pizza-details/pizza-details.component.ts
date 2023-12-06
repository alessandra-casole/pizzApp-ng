import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pizzas } from 'src/app/models/cards';
import { CartService } from 'src/app/services/cart.service';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent implements OnInit {
  id?: number;
  pizza?: Pizzas;
  error: any;

  constructor(
    public pizzaService: PizzasService,
    public cartService: CartService,
    private http: HttpClient,
    public route: ActivatedRoute
  ) {
    pizzaService.getPizzas();
  }
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    this.http
      .get<Pizzas>(
        `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${this.id}`
      )
      .subscribe({
        next: (res) => {
          this.pizza = res;
        },
        error: (error) => {
          console.log(error.message);
          this.error = error.status;
        }
      });
  }
}
