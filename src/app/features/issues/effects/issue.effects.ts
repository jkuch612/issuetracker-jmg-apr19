import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as issueActions from '../actions/issue.action';
import { IssueEntity } from '../reducers/issues.reducer';

@Injectable()
export class IssueEffects {

  readonly uri = 'http://localhost:3000/developers';

  issues: IssueEntity[] = [
    {
      assignedDeveloper: '', title: 'Issue4', description: 'Fourth Issue',
      dateSubmitted: '04/29/2019', dateCompleted: 'N/A', id: '4', status: 'unassigned', commitHash: ''
    },
    {
      assignedDeveloper: '', title: 'Issue3', description: 'Third Issue',
      dateSubmitted: '04/28/2019', dateCompleted: 'N/A', id: '3', status: 'unassigned', commitHash: ''
    },
    {
      assignedDeveloper: 'John Kuch', title: 'Issue2', description: 'Second Issue',
      dateSubmitted: '04/10/2019', dateCompleted: 'N/A', id: '2', status: 'assigned', commitHash: ''
    },
    {
      assignedDeveloper: 'John Kuch', title: 'Issue1', description: 'First Issue',
      dateSubmitted: '10/03/2018', dateCompleted: '10/04/2018', id: '1', status: 'completed', commitHash: '123'
    }
  ]

  @Effect() loadIssues$ = this.actions$
    .pipe(
      ofType(issueActions.ISSUE_LOAD),
      map(() => new issueActions.IssuesLoadedSuccessfully(this.issues))
    );

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
