import { UserTypes, UserFeature } from './types';

let UserID = 1

export const userInsertAction = () => ({
  type: UserTypes.INSERT,
  payload: { id: UserID++, name: Date.now() + 'Name', age: Math.floor(Math.random() * 100) },
  meta: { feature: UserFeature }
})

export const userUpdateAction = () => ({
  type: UserTypes.UPDATE,
  payload: {id: UserID - 2,  name: Date.now() + 'New-name', age: Math.floor(Math.random() * 100) },
  meta: { feature: UserFeature }
})

export const userDeleteAction = () => {
  const id = UserID - 1
  UserID--
  return {
    type: UserTypes.DELETE,
    payload: { id },
    meta: { feature: UserFeature }
  }
}

export const userReadAction = (errors: any[]) => ({
  type: UserTypes.READ,
  payload: null,
  meta: { feature: UserFeature }
})
