import React, { createContext,useReducer} from 'react'
import { node } from 'prop-types'

// load reducers
import sepetReducer from './reducer/sepetReducer'
// craete initial payload

const sepet = [
    {
        id:undefined,
        piece:0
    }
]
// create context
export const SepetContext = createContext(sepet);
// create Store
function SepetStore({ children }) {

  const [state, dispatch] = useReducer(sepetReducer, sepet);
  const value = { state, dispatch };

  return (
    <SepetContext.Provider value={value}>
      {children}
    </SepetContext.Provider>
  )
}
SepetStore.defaultProps = {
  children: null
}
SepetStore.propTypes = {
  children: node
}
export default SepetStore;