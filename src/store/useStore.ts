import { useContext, useEffect, useMemo, useState } from 'react'
import { StoreContext } from './context'
import { Emitter } from './emitter'

export const useStore = (mapStateFn: Function | any, mapDispatchFn: Function | any, logger?: Function | any) => {
  const {dataStore, dispatch} = useContext(StoreContext)
  
  // state
  const initState = useMemo(() => {
    if ( typeof mapStateFn === 'function') {
      return mapStateFn(dataStore)
    }
    return mapStateFn
  }, [mapStateFn, dataStore])

  const [state, setState] = useState(initState)
  
  // map dispatch
  const mapDispatch = useMemo(() => {
    if (typeof mapDispatchFn === 'function') {
      return mapDispatchFn(dispatch)
    }
    return mapDispatchFn
  }, [mapDispatchFn, dispatch])

  // subscriber
  useEffect(() => {
    if (typeof mapStateFn !== 'function') {
      return () => {}
    }

    const unsubscriber = Emitter.subscribe(mapStateFn, initState, (newState: any) => {
      // console.log('newstate', newState)
      setState(newState)
    }, logger)
    return () => {
      unsubscriber()
    }

  }, [mapStateFn, initState, logger])
  
  return [state, typeof mapDispatchFn === 'function' ? mapDispatch: dispatch, dispatch]
}