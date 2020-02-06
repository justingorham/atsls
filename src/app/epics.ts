import {StateObservable} from 'redux-observable'
import {Observable} from 'rxjs'
import {map, mapTo} from 'rxjs/operators'
import {Action} from 'ts-action'
import {ofType} from 'ts-action-operators'
import {checkForGitInstalled, gitIsInstalled, startCli} from './actions'
import {EpicDependencies} from './custom-types'
import {State} from './reducer'

type Actions$ = Observable<Action<string>>;
type State$ = StateObservable<State>;

type Epic = (
  action$: Actions$,
  state$: State$,
  dependencies: EpicDependencies
) => Actions$;

export const start: Epic = actions$ => actions$.pipe(
  ofType(startCli),
  mapTo(checkForGitInstalled()),
)

export const checkGitInstalled: Epic = (actions$, _, dependencies) => actions$.pipe(
  ofType(checkForGitInstalled),
  mapTo(dependencies.which('git')),
  map(g => gitIsInstalled({isInstalled: Boolean(g)})),
)
