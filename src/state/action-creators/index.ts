import { Dispatch } from 'redux'
import { ActionType, EventSchema } from '../action-types'
import { Action } from '../actions/index'
import axios from 'axios'
import { apiUrl } from '../../utils/helpers/constants'

export const createEvent = (eventDetails: EventSchema) => {
  return async (dispatch: Dispatch<Action>) => {
    await axios({
      url: apiUrl,
      method: 'POST',
      data: eventDetails,
    })
    dispatch({
      type: ActionType.CREATE_EVENT,
      payload: eventDetails,
    })
  }
}
