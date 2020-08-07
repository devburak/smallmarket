import getConfig from 'next/config'
import Paperbase from '../../components/paperbase'
import UrunCard from '../../components/urunCard'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'

const Urun = (props) => {

    const {urunler} = props
    return(
        <Paperbase categories = {props.categories} 
        siteinformation = {props.siteinformation}>
            <UrunCard urun={urunler[0]}>
                
            </UrunCard>
        </Paperbase>
    )
}

  
  export async function getServerSideProps(context) {
    const { slug } = context.query;
    console.log(slug)
    var currency = {}
    const res = await fetch(serverRuntimeConfig.appURL+'products');
    const data = await res.json();

    const currest = await fetch(serverRuntimeConfig.appURL+'currency');
    currency = await currest.json();
    return {props: {urunler : data , currency:currency}}
  }
  export default Urun;