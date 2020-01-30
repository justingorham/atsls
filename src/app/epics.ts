import {Observable} from 'rxjs'
import {filter, mapTo} from 'rxjs/operators'
import {Action} from 'ts-action'

export const pingEpic = (action$: Observable<Action>) => action$.pipe(
  filter(action => action.type === 'PING'),
  mapTo({type: 'PONG'})
)
