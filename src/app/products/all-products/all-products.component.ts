import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

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
isLoading = false;


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
    this.isLoading = false;
  } , error => {
    alert("erorr")
    this.isLoading = false;
  });
}

goToPage(page: number): void {
  if (page > 0 && page <= this.totalPages) {
    this.getProduct(page);
    this.isLoading = false;

  }
}
getProductDetails(id: number): void {
    this.router.navigate(['/details', id]);
    this.isLoading = false;
}
}
