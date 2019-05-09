import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IssueListItem } from '../../model/issue';
import { selectAssignedIssues, selectCompletedIssues, selectUnassignedIssues, State } from '../../reducers';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private store: Store<State>) { }

  unassignedIssue$: Observable<IssueListItem[]>;
  assignedIssue$: Observable<IssueListItem[]>;
  completedIssue$: Observable<IssueListItem[]>;
  ngOnInit() {

    this.unassignedIssue$ = this.store.select(selectUnassignedIssues);
    this.assignedIssue$ = this.store.select(selectAssignedIssues);
    this.completedIssue$ = this.store.select(selectCompletedIssues);
  }

}
