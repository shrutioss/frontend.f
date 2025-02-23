import React from 'react'
import { AppContext } from './App_Context'

const App_State = (props) => {

  // const login = asyn(gmail,password)=>{
  //   const url = "http://localhost:5173/"
  // }
  return (
    <AppContext.Provider value={{

    }}>
        {props.children}
    </AppContext.Provider>
  )
}

export default App_State
