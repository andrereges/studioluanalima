import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StudioService } from '../studio.service';
import { Studio } from 'src/app/interfaces/studio';

@Injectable({
  providedIn: 'root',
})
export class StudioImplService extends StudioService {
  private url = 'api/studios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  override getById(id: string): Observable<Studio[]> {
    const url = `${this.url}/?id=${id}`;

    return this.http
      .get<Studio[]>(url)
      .pipe(
        tap(_ => console.log(`fetched studio id=${id}`)),
        catchError(this.handleError<Studio[]>(`getById id=${id}`)
      )
    );
  }

}