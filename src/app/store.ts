import {createStore, applyMiddleware} from 'redux'
import {stateReducer} from './reducer'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import * as Epics from './epics'

export const configureStore = () => {
  const epics = Object.keys(Epics).map(k => (Epics as any)[k])
  const rootEpic = combineEpics(...epics)
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(
    stateReducer,
    applyMiddleware(epicMiddleware)
  )
  epicMiddleware.run(rootEpic)
  return store
}

