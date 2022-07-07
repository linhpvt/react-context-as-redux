import { createContext, useReducer } from 'react'
import { RootInitState, rootReducer } from '../features/root.reducer'

export interface StoreContextInterface {
  dataStore: any
  dispatch: Function | any
}

export const StoreContext = createContext<StoreContextInterface>({dataStore: null, dispatch: null })
export const Store = ({ children }: any) => {
  const [ dataStore, dispatch ] = useReducer(rootReducer, RootInitState)
  return (
    // @ts-ignore
    <StoreContext.Provider value={{ dataStore, dispatch }}>
      { children }
    </StoreContext.Provider>
  )
}