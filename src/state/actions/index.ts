import { ActionType, EventSchema } from '../action-types/index'

interface CreateEventAction {
  type: ActionType.CREATE_EVENT
  payload: EventSchema
}

export type Action = CreateEventAction
