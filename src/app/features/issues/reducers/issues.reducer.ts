import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as issueActions from '../actions/issue.action';

export interface IssueEntity {
  id: string;
  title: string;
  dateSubmitted: string;
  description: string;
  assignedDeveloper: string;
  status: string;
  dateCompleted: string;
  commitHash: string;
}

export interface State extends EntityState<IssueEntity> {

}

export const issueAdaptor = createEntityAdapter<IssueEntity>();

const initialState: State = issueAdaptor.getInitialState();

export function reducer(state: State = initialState, action: issueActions.IssueActions): State {
  switch (action.type) {
    case issueActions.ISSUE_LOAD_SUCCESS: {
      return issueAdaptor.addAll(action.payload, state);
    }
    case issueActions.ADD_ISSUE: {
      return issueAdaptor.addOne(action.payload, state);
    }
    case issueActions.ASSIGN_ISSUE: {
      return issueAdaptor.updateOne(action.payload, state);
    }
    case issueActions.UNASSIGN_ISSUE: {
      return issueAdaptor.updateOne(action.payload, state);
    }
    case issueActions.COMPLETE_ISSUE: {
      return issueAdaptor.updateOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
