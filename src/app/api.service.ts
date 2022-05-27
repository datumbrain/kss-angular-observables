import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getPostsHandler(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
}
