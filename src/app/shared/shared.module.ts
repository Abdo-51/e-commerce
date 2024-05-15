import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {     HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
