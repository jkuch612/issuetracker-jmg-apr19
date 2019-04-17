import { Action } from '@ngrx/store';
import { developerEntity } from '../reducers/developers.reducer';

export const LOAD_DEVELOPERS = '[Issues] load the develoeprs';
export class LoadDevelopers implements Action {
  readonly type = LOAD_DEVELOPERS;
  constructor() { }
}

export const LOAD_DEVELOPERS_SUCCESS = '[issues] load the develoeprs succeeded';
export class LoadedDevelopersSuccessfully implements Action {
  readonly type = LOAD_DEVELOPERS_SUCCESS;
  constructor(public payload: developerEntity[]) { }
}

let currentId = 0;

export const ADDED_DEVELOPER = '[issues] developer added';
export class AddedDeveloper implements Action {
  readonly type = ADDED_DEVELOPER;
  public payload: developerEntity;
  constructor(firstName: string, lastName: string, team: string) {
    this.payload = {
      firstName,
      lastName,
      team,
      id: 'T' + (++currentId)
    };
  }
}

export const ADDED_DEVELOPER_SUCCESS = '[issues] added developer successfully';
export class SuccessfullyAddedDeveloper implements Action {
  readonly type = ADDED_DEVELOPER_SUCCESS;
  constructor(public oldId: string, public developer: developerEntity) {

  }
}

export const ADDED_DEVELOPER_FAILURE = '[issues] added developer failure';
export class FailedAddingDeveloper implements Action {
  readonly type = ADDED_DEVELOPER_FAILURE;
  constructor(public errorMessage: string, public developer: developerEntity) { }
}

export type DeveloperActions = LoadDevelopers
  | LoadedDevelopersSuccessfully | AddedDeveloper
  | SuccessfullyAddedDeveloper | FailedAddingDeveloper;
