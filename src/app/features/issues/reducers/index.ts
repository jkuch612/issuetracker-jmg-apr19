import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { DeveloperListItem } from '../model';
import * as fromDevelopers from './developers.reducer';

export const featureName = 'issuesFeature';

export interface State {
  developers: fromDevelopers.State;
}

export const reducers: ActionReducerMap<State> = {
  developers: fromDevelopers.reducer
}

// 1 feature reducer
export const _selectIssuesFeature = createFeatureSelector<State>(featureName);

// 2 branch reducer
export const _selectDevelopersBranch = createSelector(_selectIssuesFeature, b => b.developers);

// 3 helpers
export const { selectAll: _selectDevelopersEntities } = fromDevelopers.adapter.getSelectors(_selectDevelopersBranch);

// 4 reducers for components/ etc.
export const selectDevelopersListItems = createSelector(_selectDevelopersEntities, a => a as DeveloperListItem[]);

// todo: Developer list item []
