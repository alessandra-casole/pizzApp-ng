import { Injectable } from '@angular/core';
import { Pizzas } from '../models/cards';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Pizzas[] = [];
  total: number = 0;

  cartDisabled: boolean = true;

  addToCart(pizza: Pizzas) {
    this.cartDisabled = false;
    // controlla se la pizza aggiunta nel carrello esiste o meno, facendo un confronto di id
    const existingItem = this.items.find((item) => item.id === pizza.id);

    // se la pizza è già presente, aumenta la quantità invece di aggiungere una nuova voce
    if (existingItem) {
      existingItem.quantity++;
    } else {
      pizza.quantity = 1;
      this.items.push(pizza);
    }

    this.calculateTotal();
  }

  removeFromCart(pizza: Pizzas) {
    const existingItem = this.items.find((item) => item.id === pizza.id);

    if (existingItem) {
      existingItem.quantity--;

      if (existingItem.quantity === 0) {
        this.items = this.items.filter((item) => item.id !== pizza.id);
      }
    }

    this.calculateTotal();
  }

  clearCart() {
    window.location.reload();
    // this.items = [];
    // this.cartDisabled = true;
    // this.calculateTotal();
  }

  private calculateTotal() {
    this.total = this.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }

  constructor(private http: HttpClient) {}
}
