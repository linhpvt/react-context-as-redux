import React, { useState } from 'react';
import { v4 } from 'uuid';

import './App.css';
import { useStore } from './store/useStore';
import { useEffect } from 'react';
import * as Actions from './features/http/actions';
import Client from './pages/client';
import Http from './pages/http';
import Resources from './pages/resources';
import Users from './pages/Users';

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
  // console.log(status)
 
  useEffect(() => {
    const pt = setInterval(() => {
      // setTime(Date.now())
      let index = Math.floor(Math.random() * 1000) % 4
      // console.log('index ', index)
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
    }, 100)
    
    return () => clearInterval(pt)
  }, [dispatch])

  const [appear, setAppear] = useState(0);
  useEffect(() => {
    setInterval(() => {
      let n = Math.floor((Math.random() * 10) % 10)
      n = 10
      setAppear(n)
    }, 10000)
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <p>{status}</p>
        <p>{v4()}</p>
      </div>
      <Users />
      <div>
        {/* { (appear === 0) && <div>
          <Client></Client>
          <Http></Http>
          <Resources></Resources>
        </div>
        }
        { (appear === 1) && <div>
          
          <Http></Http>
          <Resources></Resources>
        </div>
        }
        { (appear === 2) && <div>
          <Client></Client>
          
          <Resources></Resources>
        </div>
        }
        { (appear === 3) && <div>
          <Client></Client>
          <Http></Http>
          
        </div>
        }
        { (appear === 4) && <div>
          <Resources></Resources>
        </div>
        } */}
      </div>
    </div>
  );
}

export default App

