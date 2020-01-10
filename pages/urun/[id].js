import getConfig from 'next/config'
import Paperbase from '../../components/paperbase'
import UrunCard from '../../components/urunCard'
import { useRouter } from 'next/router'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'

const Urun = (props) => {

    const router = useRouter()
    const { id } = router.query

    const {urun} = props
    return(
        <Paperbase categories = {props.categories} 
        siteinformation = {props.siteinformation}>
            
            <UrunCard urun={urun}>
                
            </UrunCard>
        </Paperbase>
    )
}

Urun.getInitialProps = async function(context) {
    const { id } = context.query;
    try{
        const res = await fetch(serverRuntimeConfig.appURL+'product/'+id);
    const data = await res.json();
    return {urun : data}
    }catch (error){
        console.log(error)
        return {urun : undefined}
    } 
    
  }
  export default Urun;