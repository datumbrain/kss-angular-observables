import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Post } from './posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'observables-starter';

  public posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  observable = new Observable(function subscribe(subscriber) {
    try {
      subscriber.next('First Value');
      subscriber.next('Second Value');
      subscriber.next('Third Value');
      subscriber.next('Fourth Value');
      setTimeout(() => {
        subscriber.next('Fifth Value');
        subscriber.complete();
      }, 1000);
    } catch (err) {
      subscriber.error(err); // delivers an error if it caught one
    }
  });

  getPosts() {
    this.apiService.getPostsHandler().subscribe((posts: Post[]) => {
      this.posts = posts.slice(0, 6);
    });
  }
  logCustomObservables() {
    this.observable.subscribe((value) => {
      console.log(value);
    });
  }
}
