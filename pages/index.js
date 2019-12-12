import getConfig from 'next/config'
import Paperbase from '../components/paperbase'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

console.log(serverRuntimeConfig.mySecret) // Will only be available on the server side
const Index = () => (
    <Paperbase></Paperbase>
  )
  
  export default Index;