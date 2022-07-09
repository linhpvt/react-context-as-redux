import { UserTypes } from './types';

// name of the page/feature/module
export const UserInitState = []
export const userReducer = (state: any = UserInitState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case UserTypes.INSERT: {
      return [...state, payload ]
    }
    case UserTypes.UPDATE: {
      return state.map((user: any) => {
        if (user.id === payload.id) {
          return {...user, ...payload }
        }
        return user
      })
    }
    case UserTypes.DELETE: {
      return state.filter((user: any) => user.id !== payload.id)
    }
  }
  return state
}