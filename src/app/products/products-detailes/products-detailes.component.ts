import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-detailes',
  templateUrl: './products-detailes.component.html',
  styleUrls: ['./products-detailes.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      const productIdParam = params.get('id');
      if (productIdParam !== null) {
        const productId = +productIdParam;
        this.getProductDetails(productId);
      } else {
        // Handle the case where the id parameter is missing or invalid
        console.error('Product ID parameter is missing');
      }
    });
  }

  getProductDetails(id: number): void {
    this.productsService.getProductById(id).subscribe(
      (res: any) => {
        this.product = res.data;
      },
      error => {
        alert("error");
      }
    );
  }
  back(){
    this.router.navigate(['/products']);
  }
}

