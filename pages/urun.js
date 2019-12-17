import getConfig from 'next/config'
import Paperbase from '../components/paperbase'
import UrunCard from '../components/urunCard'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'

const Urun = (props) => {

    return(
        <Paperbase categories = {props.categories} 
        siteinformation = {props.siteinformation}>
            <UrunCard>
                
            </UrunCard>
        </Paperbase>
    )
}

Urun.getInitialProps = async function() {
    
    const res = await fetch(serverRuntimeConfig.appURL+'allcategories');
    const data = await res.json();
    return {categories : data, siteinformation:{name:'Deniz Elektronik',adres:'MERKEZEFENDİ / DENİZLİ', url:'https://denizelectronic.com'}}
  }
  export default Urun;