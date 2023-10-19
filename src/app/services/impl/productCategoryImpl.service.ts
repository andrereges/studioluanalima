import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from 'src/app/interfaces/category';
import { ProductCategoryService } from '../product-category.service';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryImplService extends ProductCategoryService {

  private url = 'api/productCategories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  override getAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.url)
      .pipe(
        map(categories => categories),
        tap(_ => console.log(`fetched all categories`)),
        catchError(this.handleError<Category[]>('getAll', []))
      );
  }

}