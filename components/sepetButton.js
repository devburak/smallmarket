import React, { useContext } from 'react'
// load main context
import { SepetContext } from '../sepetStore'
// load action
import Button from '@material-ui/core/Button';
import SBadge from './badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const SepetButton = (props) => {
const { state,dispatch } = useContext(SepetContext)
const {item} = props
const updateName = () => ({ type: 'updateName' , item })
return (
    
        <Button variant="outlined" color="inherit" size="small"
            {...props}
            type="button"
            onClick={() => dispatch(updateName())}
        >
            sepete git
            <SBadge content={state.lenght}>
           <ShoppingCartIcon /></SBadge>
      </Button>
  
  )
}
export default SepetButton