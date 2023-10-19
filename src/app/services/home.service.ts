import { Observable, of } from 'rxjs';
import { Home } from '../interfaces/home';

export abstract class HomeService {

  abstract getData(): Observable<Home[]>;

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
  
}