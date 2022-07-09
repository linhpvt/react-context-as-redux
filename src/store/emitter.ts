export interface Subscriber {
  id: number
  mapStateFn: Function
  callbackFn: Function
  currentState: any,
  logger?: Function
}

// handle Emitter logging
const LogEnable = false

export const Emitter = (() => {
  let subscribers: Subscriber[] = []
  let IDer = 0;
  const _writeLog = (message: string) => {
    if (LogEnable) {
      console.log(`%c${message}`, 'color: green')
    }
  }

  const subscribe = (mapStateFn: Function, initState: any, callbackFn: Function, logger: Function): Function => {
    const id = IDer
    subscribers.push({ 
      id,
      mapStateFn,
      currentState: initState,
      callbackFn,
      logger
    })
    IDer += 1
    return () => {
      subscribers = subscribers.filter((subscriber: Subscriber) => subscriber.id !== id)
    }
  }

  const publish = (appState: any) => {
    
    // store the latest app state
    _writeLog(`SUBSCRIBERS: ${subscribers.length}`)
    
    // iterate over subscribers
    for (const subscriber of subscribers) {
      const { callbackFn, currentState, mapStateFn, logger } = subscriber
      const nextState = mapStateFn(appState)

      let isChanged = false
      const keys = Object.keys(nextState)
      const len = keys.length

      // check change
      for (let i = 0; i < len; i++) {
        let key = keys[i]
        if (nextState[key] !== currentState[key]) {
          isChanged = true
          break
        }
      }

      // slice data not change
      // move to next one
      if (!isChanged) {
        continue
      }

      // logging
      if (logger) {
        logger({ previous: subscriber.currentState, next: nextState })
      }
      
      // updata latest state
      subscriber.currentState = nextState
      
      // notify
      callbackFn(nextState)
    }
  }
  return {
    publish,
    subscribe
  }
})();