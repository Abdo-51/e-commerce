import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://reqres.in/api/users';
  constructor(private http:HttpClient) { }


  getAllProducts(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
}
