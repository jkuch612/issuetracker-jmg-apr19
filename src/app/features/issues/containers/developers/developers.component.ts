import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeveloperListItem } from '../../model';
import { selectDevelopersListItems, selectDevelopersLoaded, State } from '../../reducers';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developersLoaded$: Observable<boolean>;
  dev$: Observable<DeveloperListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.dev$ = this.store.select(selectDevelopersListItems);
    this.developersLoaded$ = this.store.select(selectDevelopersLoaded);
  }

}
