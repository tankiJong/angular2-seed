import * as user from './user';
import { EffectsModule } from '@ngrx/effects';

export const reducers = {
  user: user.reducer,
}

export const effects = [
  () => EffectsModule.run(user.UserEffects),
  // () => EffectsModule.runAfterBootstrap(user.UserEffects),
]

export const actions = {
  user: user.userActions,
};
