import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { DeveloperListItem } from '../model';
import * as fromDevelopers from './developers.reducer';
import * as fromSorters from './sorters.reducer';

export const featureName = 'issuesFeature';

export interface State {
  developers: fromDevelopers.State;
  sorters: fromSorters.State;
}

export const reducers: ActionReducerMap<State> = {
  developers: fromDevelopers.reducer,
  sorters: fromSorters.reducer
};

// 1 feature reducer
export const _selectIssuesFeature = createFeatureSelector<State>(featureName);

// 2 branch reducer
export const _selectDevelopersBranch = createSelector(_selectIssuesFeature, b => b.developers);
export const _selectSortersBranch = createSelector(_selectIssuesFeature, f => f.sorters);

// 3 helpers
export const { selectAll: _selectDevelopersEntities } = fromDevelopers.adapter.getSelectors(_selectDevelopersBranch);
export const _selectDevelopersListItemsUnsorted = createSelector(_selectDevelopersEntities, a => a as DeveloperListItem[]);

// 4 reducers for components/ etc.
export const selectSortDeveloperListBy = createSelector(_selectSortersBranch, b => b.sortDeveloperBy);
export const selectDevelopersListItems = createSelector(_selectDevelopersListItemsUnsorted,
  selectSortDeveloperListBy,
  (list, sortkey) => {
    return [...list.sort((lhs: DeveloperListItem, rhs: DeveloperListItem) => {
      if (lhs[sortkey] < rhs[sortkey]) {
        return -1;
      }
      if (lhs[sortkey] > rhs[sortkey]) {
        return 1;
      }
      return 0;
    })];
  });



// todo: Developer list item []
