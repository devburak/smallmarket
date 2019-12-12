import getConfig from 'next/config'
import Paperbase from '../components/paperbase'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'
console.log(serverRuntimeConfig.mySecret) // Will only be available on the server side

const Index = (props) => (
    <Paperbase categories = {props.categories}></Paperbase>
  )
  

  Index.getInitialProps = async function() {
    console.log('get initial')
    console.log('URL :  ' + serverRuntimeConfig.appURL+'allcategories')
    const res = await fetch(serverRuntimeConfig.appURL+'allcategories');
    const data = await res.json();
    console.log(data)
    return {categories : data}
  }
  export default Index;