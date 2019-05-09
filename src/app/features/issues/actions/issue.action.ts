import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { IssueEntity } from '../reducers/issues.reducer';

export const ISSUE_LOAD = '[Issue] Load';
export class IssueLoad implements Action {
  readonly type = ISSUE_LOAD;
  constructor() { }
}

export const ISSUE_LOAD_SUCCESS = '[Issue] Load Success';
export class IssuesLoadedSuccessfully implements Action {
  readonly type = ISSUE_LOAD_SUCCESS;
  constructor(public payload: IssueEntity[]) { }
}

let currentId = 10;

export const ADD_ISSUE = '[Issue] Add';
export class AddIssue implements Action {
  readonly type = ADD_ISSUE;
  public payload: IssueEntity;
  constructor(public title: string, public description: string) {
    currentId++;
    this.payload = {
      id: currentId.toString(),
      title,
      description,
      dateSubmitted: getCurrentDateString(),
      assignedDeveloper: 'N/A',
      status: 'unassigned',
      dateCompleted: 'N/A',
      commitHash: ''
    }
  }
}

export const ASSIGN_ISSUE = '[Issue] Assign';
export class AssignIssue implements Action {
  readonly type = ASSIGN_ISSUE;
  public payload: Update<IssueEntity>;
  constructor(public id: string, public developer: string) {
    this.payload = {
      id,
      changes: {
        assignedDeveloper: developer,
        status: 'assigned'
      }
    };
  }
}

export const UNASSIGN_ISSUE = ' Unassign';
export class UnassignIssue implements Action {
  readonly type = UNASSIGN_ISSUE;
  public payload: Update<IssueEntity>;
  constructor(public id: string) {
    this.payload = {
      id,
      changes: {
        assignedDeveloper: 'N/A',
        status: 'unassigned'
      }
    };
  }
}


export const COMPLETE_ISSUE = '[Issue] Complete';
export class CompleteIssue implements Action {
  readonly type = COMPLETE_ISSUE;
  public payload: Update<IssueEntity>;
  constructor(public id: string, public commitHash: string) {
    this.payload = {
      id,
      changes: {
        status: 'completed',
        dateCompleted: getCurrentDateString(),
        commitHash
      }
    }
  }
}




export const ADDED_ISSUE_SUCCESS = '[Issue] Added Success';
export class IssueAddedSuccessfully implements Action {
  readonly type = ADDED_ISSUE_SUCCESS;
  constructor(public oldId: string, public issue: IssueEntity) { }
}

export const ADDED_ISSUE_FAILURE = '[Issue] Add Failed';
export class IssueAddFailure implements Action {
  readonly type = ADDED_ISSUE_FAILURE;
  constructor(public errorMessage: string, public issue: IssueEntity) { }
}

export const UPDATE_ISSUE = '[Issue] Update';
export class UpdateIssue implements Action {
  readonly type = UPDATE_ISSUE;
  constructor(public payload: Update<IssueEntity>) { }
}

export function getCurrentDateString(): string {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const todayString = mm + '/' + dd + '/' + yyyy;
  return todayString;
}

export type IssueActions = IssuesLoadedSuccessfully | IssueLoad | UpdateIssue | AddIssue | AssignIssue | UnassignIssue | CompleteIssue;











