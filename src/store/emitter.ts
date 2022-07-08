export interface Subscriber {
  id: number
  mapStateFn: Function
  callbackFn: Function
  lastState: any,
  logger?: Function
}

// handle Emitter logging
const LogEnable = true

export const Emitter = (() => {
  let subscribers: Subscriber[] = []
  let IDer = 0;

  const _writeLog = (message: string) => {
    if (LogEnable) {
      console.log(`%c${message}`, 'color: green')
    }
  }

  const subscribe = (mapStateFn: Function, initSate: any, callbackFn: Function, logger: Function): Function => {
    const id = IDer
    subscribers.push({ 
      id,
      mapStateFn,
      lastState: initSate,
      callbackFn,
      logger
    })
    IDer += 1
    return () => {
      subscribers = subscribers.filter((subscriber: Subscriber) => subscriber.id !== id)
    }
  }

  const publish = (appState: any) => {
    _writeLog(`SUBSCRIBERS: ${subscribers.length}`)
    // iterate over subscribers
    for (const subscriber of subscribers) {
      const { callbackFn, lastState, mapStateFn, logger } = subscriber
      const nextState = mapStateFn(appState)
      let isChanged = false
      const keys = Object.keys(nextState)
      const len = keys.length

      // check change
      for (let i = 0; i < len; i++) {
        let key = keys[i]
        if (nextState[key] !== lastState[key]) {
          isChanged = true
          break
        }
      }
      // slice data not change
      if (!isChanged) {
        return
      }

      // logging
      if (logger) {
        logger({ previous: subscriber.lastState, next: nextState })
      }
      // updata latest state
      subscriber.lastState = nextState
      // notify
      callbackFn(nextState)
    }
  }
  return {
    publish,
    subscribe
  }
})();