import { Dispatch } from 'redux'
import { ActionType, EventSchema } from '../action-types'
import { Action } from '../actions/index'

export const createEvent = (eventDetails: EventSchema) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_EVENT,
      payload: eventDetails,
    })
  }
}
