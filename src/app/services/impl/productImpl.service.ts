import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductImplService extends ProductService {

  private url = 'api/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  override getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.url)
      .pipe(
        map(products => products),
        tap(_ => console.log(`fetched all products`)),
        catchError(this.handleError<Product[]>('getAll', []))
      );
  }

}