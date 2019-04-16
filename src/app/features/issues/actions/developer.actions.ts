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


export type DeveloperActions = LoadDevelopers | LoadedDevelopersSuccessfully;
