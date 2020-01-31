import {Middleware} from 'redux'
import {State} from './reducer'

export const logger: Middleware<{}, State> = ({getState}) => next => action => {
  const state = getState()
  // eslint-disable-next-line no-console
  console.dir({state, action})
  return next(action)
}
