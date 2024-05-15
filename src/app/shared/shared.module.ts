import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {     HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ProductsModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
