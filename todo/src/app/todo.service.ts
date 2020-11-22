import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get('/api/todos');
  }

  create(data): Observable<any> {
    return this.http.post('/api/todos', { todo: data });
  }
  update(id, data): Observable<any> {
    return this.http.put('/api/todos/' + id, { todo: data });
  }
}
