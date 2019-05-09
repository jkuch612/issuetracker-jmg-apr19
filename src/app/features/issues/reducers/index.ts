import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { DeveloperListItem } from '../model';
import { IssueListItem } from '../model/issue';
import * as fromDevelopers from './developers.reducer';
import * as fromIssues from './issues.reducer';
import * as fromSorters from './sorters.reducer';
import * as fromUiHints from './ui-hints.reducer';

export const featureName = 'issuesFeature';

export interface State {
  developers: fromDevelopers.State;
  sorters: fromSorters.State;
  uiHints: fromUiHints.State;
  issues: fromIssues.State;
}

export const reducers: ActionReducerMap<State> = {
  developers: fromDevelopers.reducer,
  sorters: fromSorters.reducer,
  uiHints: fromUiHints.reducer,
  issues: fromIssues.reducer
};

// 1 feature reducer
export const _selectIssuesFeature = createFeatureSelector<State>(featureName);

// 2 branch reducer
export const _selectDevelopersBranch = createSelector(_selectIssuesFeature, b => b.developers);
export const _selectSortersBranch = createSelector(_selectIssuesFeature, f => f.sorters);
export const _selectUiHintsBranch = createSelector(_selectIssuesFeature, d => d.uiHints);
export const _selectIssuesBranch = createSelector(_selectIssuesFeature, i => i.issues);

// 3 helpers
export const { selectAll: _selectDevelopersEntities } = fromDevelopers.adapter.getSelectors(_selectDevelopersBranch);
export const _selectDevelopersListItemsUnsorted = createSelector(_selectDevelopersEntities, a => a as DeveloperListItem[]);
export const { selectAll: _selectIssueEntities } = fromIssues.issueAdaptor.getSelectors(_selectIssuesBranch);

// 4 reducers for components/ etc.
export const selectSortDeveloperListBy = createSelector(_selectSortersBranch, b => b.sortDeveloperBy);

export const selectDevelopersLoaded = createSelector(_selectUiHintsBranch, u => u.developersLoaded);

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

export const selectUnassignedIssues = createSelector(_selectIssueEntities, i => i.filter(ili => ili.status === 'unassigned'));
export const selectAssignedIssues = createSelector(_selectIssueEntities, i => i.filter(ili => ili.status === 'assigned'));
export const selectCompletedIssues = createSelector(_selectIssueEntities, i => i.filter(ili => ili.status === 'completed'));
export const selectIssueById = (id: string) => createSelector(_selectIssueEntities, i => i.find(a => a.id === id) as IssueListItem);



// todo: Developer list item []
