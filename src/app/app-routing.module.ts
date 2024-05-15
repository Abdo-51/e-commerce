import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { CardsComponent } from './cards/cards/cards.component';
import { ProductDetailsComponent } from './products/products-detailes/products-detailes.component';

const routes: Routes = [
  {path:"products" , component: AllProductsComponent},
  {path:"details/:id" , component: ProductDetailsComponent},
  {path:"cart" , component: CardsComponent},
  {path:"**" , redirectTo: "products" , pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
