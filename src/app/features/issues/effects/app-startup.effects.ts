import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import * as appActions from '../../../actions/app.actions';
import * as developerActions from '../actions/developer.actions';
import * as issueActions from '../actions/issue.action';

@Injectable()
export class AppStartUpEffect {
  @Effect() addingADeveloperDoneBlewUp$ = this.actions$
    .pipe(
      ofType(developerActions.ADDED_DEVELOPER_FAILURE),
      map(a => a as developerActions.FailedAddingDeveloper),
      map(a => new appActions.ApplicationError(a.errorMessage, 'issues')
      ));

  @Effect() startup$ = this.actions$
    .pipe(
      ofType(appActions.APP_START),
      concatMap(() => [
        new developerActions.LoadDevelopers(),
        new issueActions.IssueLoad()
      ])
    );
  constructor(private actions$: Actions) { }
}
