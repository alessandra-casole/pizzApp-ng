import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { MenuComponent } from './feature/menu/menu.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PizzaDetailsComponent } from './feature/pizza-details/pizza-details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "home/pizza/:id", component: PizzaDetailsComponent },
  { path: "menu", component: MenuComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
