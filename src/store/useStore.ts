import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { StoreContext } from './context'
import { Emitter } from './emitter'

export const useStore = (mapStateFn: Function | any, mapDispatchFn: Function | any, logger?: Function | any) => {
  const {dataStore, dispatch} = useContext(StoreContext)
  
  // state
  const [state, setState ] = useState(() => {
    if (typeof mapStateFn !== 'function') {
      return mapStateFn
    }
    return mapStateFn(dataStore)
  })
  const initState = useRef(state)

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

    const unsubscriber = Emitter.subscribe(mapStateFn, initState.current, (newState: any) => {
      setState(newState)
    }, logger)
    return () => {
      unsubscriber()
    }

  }, [mapStateFn, logger])
  
  return [state, typeof mapDispatchFn === 'function' ? mapDispatch: dispatch, dispatch]
}