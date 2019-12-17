import React, { createContext, useReducer } from 'react'
import { node } from 'prop-types'
// load reducers
import userReducer from './reducer/userReducer'
// craete initial payload
const users = {
  name:'giriş',
  surname:'',
  token:undefined,
  mail:undefined
}

// create context
export const MainContext = createContext(users);
// create Store
function Store({ children }) {
  const [state, dispatch] = useReducer(userReducer, users);
  const value = { state, dispatch };
  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}
Store.defaultProps = {
  children: null
}
Store.propTypes = {
  children: node
}
export default Store;