/* eslint-disable no-console */
import {Middleware} from 'redux'
import {State} from './reducer'

export const logger: Middleware<{}, State> = ({getState}) => next => action => {
  console.dir({action})
  const m = next(action)
  console.dir({state: getState()})
  return m
}
