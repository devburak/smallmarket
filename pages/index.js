import getConfig from 'next/config'
import Paperbase from '../components/paperbase'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'
import ListUrunler from '../components/listurunler'
import Categorylist from '../components/categorylist'

const Index = (props) => (
    <Paperbase categories = {props.categories} 
    siteinformation = {props.siteinformation}>

     
      <Categorylist categories = {props.categories} />
    </Paperbase>
  )
  

  // Index.getInitialProps = async function() {
    
  //   const res = await fetch(serverRuntimeConfig.appURL+'allcategories');
  //   const data = await res.json();
  //   return {categories : data, siteinformation:{name:'Deniz Elektronik',adres:'MERKEZEFENDİ / DENİZLİ', url:'https://denizelectronic.com'}}
  // }

  export async function getServerSideProps() {

    console.log('fetching category')
  
    const res = await fetch(serverRuntimeConfig.appURL+'allcategories');
    const categories = await res.json();
      
    // Pass data to the page via props
    return { props: { categories } }
  }
  export default Index;