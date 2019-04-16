import { Action } from '@ngrx/store';



export interface State {
  sortDeveloperBy: 'firstName' | 'lastName';
}

const initialState: State = {
  sortDeveloperBy: 'lastName'
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
