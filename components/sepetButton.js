import React, { useContext,useState } from 'react'
// load main context
import { SepetContext } from '../sepetStore'
// load action
import Button from '@material-ui/core/Button';
import SBadge from './badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const SepetButton = (props) => {

const { state,dispatch } = useContext(SepetContext)
const {item} = props
const l = state.item && state.item.length 
console.log(state.item && state.item.length  )
const updateName = () => ({ type: 'updateName'  })

return (
    
        <Button variant="outlined" color="inherit" size="small"
            {...props}
            type="button"
            onClick={() => dispatch(updateName())}
        >
            sepete git
            <SBadge content={l}>
           <ShoppingCartIcon /></SBadge>
      </Button>
  
  )
}
export default SepetButton