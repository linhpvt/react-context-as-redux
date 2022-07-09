import { useEffect, useRef, useState } from 'react';


const RenderTwice = () => {
  const firstRun = useRef(0)
  const [time, setTime] = useState(Date.now())
  useEffect(() => {
    
    // first run -> not run
    if (firstRun.current === 0) {
      firstRun.current = 1
      return
    }

    console.log('effect run', firstRun.current)

    firstRun.current += 1
    return () => {
      console.log('unmounted')
    }
  }, [time])
  return (
    <div>
      useEffect render twice
      <button onClick={() => setTime(Date.now())}>Run</button>
    </div>
  )
}
export default RenderTwice