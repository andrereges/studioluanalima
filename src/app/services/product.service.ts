import { Observable, of } from 'rxjs';
import { Product } from "../interfaces/product";

export abstract class ProductService {

  abstract getAll(): Observable<Product[]>;

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}