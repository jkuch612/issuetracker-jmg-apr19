import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as developerActions from '../actions/developer.actions';
import { developerEntity } from '../reducers/developers.reducer';

@Injectable()
export class DeveloperEffects {

  readonly uri = 'http://localhost:3000/developers';

  @Effect() addDevelopers$ = this.actions$
    .pipe(
      ofType(developerActions.ADDED_DEVELOPER),
      map(a => a as developerActions.AddedDeveloper),
      switchMap(originalAction => this.http.post<developerEntity>(this.uri, originalAction.payload)
        .pipe(
          map(developerFromServer => new developerActions.SuccessfullyAddedDeveloper(originalAction.payload.id, developerFromServer)),
          catchError(r => of(new developerActions.FailedAddingDeveloper('Cannot add that developer', originalAction.payload))
          )
        ))
    );
  @Effect() loadDevelopers$ = this.actions$
    .pipe(
      ofType(developerActions.LOAD_DEVELOPERS),
      switchMap(() => this.http.get<{ data: developerEntity[] }>(this.uri)
        .pipe(
          map(r => r.data),
          map(d => new developerActions.LoadedDevelopersSuccessfully(d))
        )

      )
    )

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
