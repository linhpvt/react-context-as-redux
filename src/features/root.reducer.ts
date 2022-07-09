import { Emitter } from '../store/emitter';
import { UserInitState, userReducer } from './users/reducer'
import { UserFeature } from './users/types'
import { HttpInitState, httpReducer } from './http/reducer'
import { HttpFeature } from './http/types'
import { ResourcesInitState, resourcesReducer, ResourcesPage } from './resources/reducer'

export const RootInitState = {
  [UserFeature]: UserInitState,
  [HttpFeature]: HttpInitState,
  [ResourcesPage]: ResourcesInitState
}

const AllReducers = {
  [UserFeature]: userReducer,
  [HttpFeature]: httpReducer,
  [ResourcesPage]: resourcesReducer
} as any;


// set initial state for emitter
// Emitter.publish(RootInitState);

export const rootReducer = (state: any = RootInitState, action: any) => {
  const { meta: { feature = '' } = {}} = action
  
  const reducer = AllReducers[feature]
  // no reducer
  if (!reducer) {
    return state
  }
  // prev state of slice
  const prevSliceState = state[feature]
  // next state of slice
  const nextSliceState = reducer(prevSliceState, action)
  
  // no change
  if (prevSliceState === nextSliceState) {
    return state
  }

  state[feature] = nextSliceState
  
  // state of store is stable before children components updating 
  setTimeout(() => {
    // publish change to all subscribers
    Emitter.publish(state)
  }, 0)
  return state
}