import getConfig from 'next/config'
import Paperbase from '../components/paperbase'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'
import ListUrunler from '../components/listurunler'

const Index = (props) => (
    <Paperbase categories = {props.categories} 
    siteinformation = {props.siteinformation}>

      <ListUrunler />
    </Paperbase>
  )
  

  // Index.getInitialProps = async function() {
    
  //   const res = await fetch(serverRuntimeConfig.appURL+'allcategories');
  //   const data = await res.json();
  //   return {categories : data, siteinformation:{name:'Deniz Elektronik',adres:'MERKEZEFENDİ / DENİZLİ', url:'https://denizelectronic.com'}}
  // }
  export default Index;