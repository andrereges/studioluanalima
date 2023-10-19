import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Home } from 'src/app/interfaces/home';
import { HomeService } from '../home.service';

@Injectable({
  providedIn: 'root',
})
export class HomeImplService extends HomeService {

  private url = 'api/home';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  override getData(): Observable<Home[]> {
    return this.http
      .get<Home[]>(this.url)
      .pipe(
        map(home => home),
        tap(_ => console.log(`fetched home`)),
        catchError(this.handleError<Home[]>('getData', []))
      );
  }

}