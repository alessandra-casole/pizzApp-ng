import { Injectable } from '@angular/core';
import { Pizzas } from '../models/cards';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  // Navbar Logo
  logo =
    'https://raw.githubusercontent.com/zoelounge/menupizza/main/images/logo.jpeg';

  // Not Found Page
  notFoundImg =
    'https://images.pexels.com/photos/18912713/pexels-photo-18912713/free-photo-of-questo-e-il-primo-piano-della-mia-pizza-di-halloween-a-lievitazione-naturale-con-base-di-zucca-salvia-mozzarella-cipolla-rossa-olio-di-semi-di-zucca.jpeg';

  // repository - array vuoto in cui andranno le nostre pizze (inserite dinamicamente) - va spostato nello state manager
  pizzas: Pizzas[] = [];

  getPizzas() {
    return this.http
      .get<Pizzas[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
      )
      .subscribe((result) => {
        this.pizzas = result;
      });
  }

  getPizzaDescription(index: number) {
    return this.pizzas[index];
  }

  deletePizzas(id: number) {
    return this.http
      .delete(
        `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${id}`
      )
      .subscribe((result) => {
        console.log(result);
        this.pizzas = this.pizzas.filter((pizza) => pizza.id !== id);
      });
  }


  constructor(public http: HttpClient, private route: ActivatedRoute) {}
}
