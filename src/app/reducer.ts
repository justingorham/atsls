import {on, reducer} from 'ts-action'
import {gitIsInstalled} from './actions'

export interface State {
    isInstalled: boolean;
  }
export const initialState: State = {isInstalled: false}

export const stateReducer = reducer(
  initialState,
  on(gitIsInstalled, (state, {payload: {isInstalled}}) => ({...state, isInstalled}))
)
