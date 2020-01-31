import {on, reducer} from 'ts-action'
import {gitIsInstalled} from './actions'

export interface State {
  cli: {
    cwd: string | null;
    cliDir: string | null;
  };
  git: {
    isInstalled: boolean;
  };
}
export const initialState: State = {
  cli: {
    cwd: null,
    cliDir: null,
  },
  git: {
    isInstalled: false,
  },
}

export const stateReducer = reducer(
  initialState,
  on(gitIsInstalled, (state, {payload: {isInstalled}}) => ({...state, git: {...state.git, isInstalled}}))
)
