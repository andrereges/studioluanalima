import { Observable, of } from 'rxjs';
import { Procedure } from "../interfaces/procedure";

export abstract class ProcedureService {

  abstract getBySlug(slug: string): Observable<Procedure[]>;
  abstract getAll(): Observable<Procedure[]>;
  
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}