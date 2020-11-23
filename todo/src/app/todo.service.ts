import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(environment.apiUrl + '/todos');
  }

  create(data): Observable<any> {
    return this.http.post(environment.apiUrl + '/todos', { todo: data });
  }
  update(id, data): Observable<any> {
    return this.http.put(environment.apiUrl + '/todos/' + id, { todo: data });
  }
}
