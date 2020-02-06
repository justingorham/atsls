import {on, reducer} from 'ts-action'
import {gitIsInstalled, startCli} from './actions'

export interface State {
  cli: {
    cwd: string;
    cliDir: string;
    force: boolean;
    skipGit: boolean;
  };
  git: {
    isInstalled: boolean;
  };
}
export const initialState: State = {
  cli: {
    cwd: null,
    cliDir: null,
    force: false,
    skipGit: false,
  },
  git: {
    isInstalled: false,
  },
}

export const stateReducer = reducer(
  initialState,
  on(gitIsInstalled, (state, {payload: {isInstalled}}) => ({
    ...state,
    git: {...state.git, isInstalled},
  })),
  on(startCli, (state, {payload: {cwd, cliDir, force, skipGit}}) => ({
    ...state,
    cli: {...state.cli, cwd, cliDir, force, skipGit},
  })),
)
