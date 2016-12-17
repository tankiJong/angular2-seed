import { ActionReducer, Action } from '@ngrx/store';

import { userActions as types } from './user.action';
import { User } from './user.effect';


export const reducer: ActionReducer<User> = (state: User, action: Action) => {
  switch (action.type) {
    case types.login:
      return state;
  }
  return state;
};
