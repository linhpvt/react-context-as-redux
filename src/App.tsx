import React from 'react';
import { v4 } from 'uuid';

import logo from './logo.svg';
import './App.css';
import { useStore } from './store/useStore';
import { useEffect } from 'react';
import * as Actions from './features/http/actions';

const mapStateToProps = ((state: any) => {
  const {
    http: {
      status = ''
    } = {}
  } = state
  return { status }
})

function App() {
  // const [{ status }, dispatch] = useStore(mapStateToProps, null, logger)
  const [{ status }, dispatch] = useStore(mapStateToProps, null)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)

  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)

  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)

  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)
  // useStore(mapStateToProps, null, logger)


  // const [{ status : a }] = useStore(mapStateToProps, null, logger)
  console.log(status)
 
  useEffect(() => {
    const pt = setInterval(() => {
      // setTime(Date.now())
      let index = Math.floor(Math.random() * 1000) % 4
      // index = 2
      // @ts-ignore
      let action;
      switch(index) {
        case 0: {
          action = Actions.httpReadyAction()
          break
        }
        case 1: {
          action = Actions.httpRequestingAction()
          break
        }
        case 2: {
          action = Actions.httpSuccessAction()
          break
        }
        case 3: {
          action = Actions.httpFailureAction([{ message: `server downside`}])
          break
        }
        default:
          action = Actions.httpRequestingAction()
      }
      dispatch(action)
    }, 1000)
    
    return () => clearInterval(pt)
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{status}</p>
        <p>{v4()}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default React.memo(App);
