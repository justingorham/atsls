import {applyMiddleware, compose, createStore} from 'redux'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {EpicDependencies} from './custom-types'
import * as Epics from './epics'
import {logger} from './logger-middleware'
import {stateReducer} from './reducer'

const dependencies: EpicDependencies = {}

export const configureStore = () => {
  const epics = Object.keys(Epics).map(k => (Epics as any)[k])
  const rootEpic = combineEpics(...epics)
  const epicMiddleware = createEpicMiddleware({
    dependencies,
  })
  const store = createStore(
    stateReducer,
    compose(applyMiddleware(epicMiddleware), applyMiddleware(logger))
  )
  epicMiddleware.run(rootEpic)
  return store
}
