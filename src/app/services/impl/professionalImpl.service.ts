import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProfessionalService } from '../professional.service';
import { Professional } from 'src/app/interfaces/professional';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalImplService extends ProfessionalService {
  private url = 'api/professionals';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  override getAll(): Observable<Professional[]> {
    return this.http
      .get<Professional[]>(this.url)
      .pipe(
        map(professionals => professionals),
        tap(_ => console.log(`fetched all professionals`)),
        catchError(this.handleError<Professional[]>('getAll', []))
      );
  }

}