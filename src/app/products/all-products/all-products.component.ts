import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
products : any[] = [];
supportText: string = '';
supportUrl: string = '';
currentPage: number = 1;
totalPages!: number;


constructor(private productsService: ProductsService , private router: Router,)
{

}
ngOnInit(){
  this.getProduct(this.currentPage);


}

getProduct(page: number): void {
  this.productsService.getAllProducts(page).subscribe((res: any) => {
    this.products = res.data;
    this.supportText = res.support.text;
    this.supportUrl = res.support.url;
    this.currentPage = res.page;
    this.totalPages = res.total_pages;
   
    
  } , error => {
    alert("erorr")
  });
}

goToPage(page: number): void {
  if (page > 0 && page <= this.totalPages) {
    this.getProduct(page);
  }
}
getProductDetails(id: number): void {
    this.router.navigate(['/details', id]);
}

}
