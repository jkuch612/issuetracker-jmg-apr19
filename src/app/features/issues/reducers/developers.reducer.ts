import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/developer.actions';

export interface developerEntity {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
}

export interface State extends EntityState<developerEntity> {

}


export const adapter = createEntityAdapter<developerEntity>();
const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState, action: actions.DeveloperActions): State {
  switch (action.type) {
    case actions.LOAD_DEVELOPERS_SUCCESS: {
      return adapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
