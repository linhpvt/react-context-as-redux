import { HttpStatus, HttpTypes } from './types';

export interface HttpStatusInterface {
  // start.general request
  code: number
  status: string
  errors: any[]
  // end.general request
  // specific request by action type
  actions?: {
    type?: string
    status?: string
    errors?: any[]
  },
}

export const HttpInitState: HttpStatusInterface = {
  code: 0,
  status: HttpStatus.READY,
  errors: [],
  actions: {
  },
}
export const httpReducer = (state: any = HttpInitState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case HttpTypes.READY: {
      return { ...state, ...payload }
    }
    case HttpTypes.REQUESTING: {
      return { ...state, ...payload }
    }
    case HttpTypes.SUCCESS: {
      return { ...state, ...payload }
    }
    case HttpTypes.FAILURE: {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}