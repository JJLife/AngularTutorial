import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodoList() {
    // return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map((res) => res.json));
    // return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map((res) => res.json));
    return this.http.get(this._url);
  }
}
