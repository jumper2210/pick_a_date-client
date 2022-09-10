import { ActionType } from '../action-types/index'
import { Action } from '../actions'

export const reducer = (events = [], action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_EVENT:
      return [...events, action.payload]
    default:
      return events
  }
}
