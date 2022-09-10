export enum ActionType {
  CREATE_EVENT = 'create-event',
}

export type EventSchema = {
  firstName: string
  lastName: string
  email: string
  date: Date
}
