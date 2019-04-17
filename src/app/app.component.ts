import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationStarted } from './actions/app.actions';
import { selectErrorMessage, selectHasErrors, State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'issuetracker';
  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) {
    store.dispatch(new ApplicationStarted());
  }

  ngOnInit() {
    this.hasError$ = this.store.select(selectHasErrors);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

}
