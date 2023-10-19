import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProcedureService } from '../procedure.service';
import { Procedure } from 'src/app/interfaces/procedure';

@Injectable({
  providedIn: 'root',
})
export class ProcedureImplService extends ProcedureService {
  private url = 'api/procedures';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  override getBySlug(slug: string): Observable<Procedure[]> {
    const url = `${this.url}/?slug=${slug}`;

    return this.http
      .get<Procedure[]>(url)
      .pipe(
        tap(_ => console.log(`fetched procedure slug=${slug}`)),
        catchError(this.handleError<Procedure[]>(`getBySlug slug=${slug}`)
      )
    );
  }

  override getAll(): Observable<Procedure[]> {
    return this.http
      .get<Procedure[]>(this.url)
      .pipe(
        map(procedures => procedures),
        tap(_ => console.log(`fetched all procedures`)),
        catchError(this.handleError<Procedure[]>('getAll', []))
      );
  }

}