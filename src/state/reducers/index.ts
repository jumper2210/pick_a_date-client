import { combineReducers } from 'redux'
import { reducer } from './eventReducer'

const reducers = combineReducers({
  event: reducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
