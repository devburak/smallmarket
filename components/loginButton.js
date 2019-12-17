import React, { useContext } from 'react'
// load main context
import { MainContext } from '../userstore'
// load action
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'




const LoginButton = (props) => {
const { state,dispatch } = useContext(MainContext)
const {user} = props
const updateName = () => ({ type: 'updateName' , user })
const router = useRouter()

const handleClick = e => {
  dispatch(updateName())
  console.log('handeled')
  e.preventDefault()
  router.push('/underconstruction')
}
return (
  
    <Button  variant="outlined" color="inherit" size="small"
        {...props}
        type="button"
        onClick={handleClick}
      >
       {state.name } 
      </Button>
   
  )
}
export default LoginButton