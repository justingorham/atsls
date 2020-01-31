import {StateObservable} from 'redux-observable'
import {Observable} from 'rxjs'
import {filter, mapTo} from 'rxjs/operators'
import {Action} from 'ts-action'
import {State} from './reducer'
import {EpicDependencies} from './custom-types'

type State$ = StateObservable<State>;

export const pingEpic = (
  action$: Observable<Action>,
  _state$: State$,
  _dependencies: EpicDependencies
) =>
  action$.pipe(
    filter(action => action.type === 'PING'),
    mapTo({type: 'PONG'})
  )
