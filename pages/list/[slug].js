import getConfig from 'next/config'
import Paperbase from '../../components/paperbase'
import UrunCard from '../../components/urunCard'
import { useRouter } from 'next/router'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'

const UrunList = (props) => {

    const router = useRouter()
    const { slug } = router.query
    console.log(slug)
    const {urunler,currency } = props
    console.log(urunler)
    console.log(currency)
    return(
        <Paperbase categories = {props.categories} 
        siteinformation = {props.siteinformation}>
          {  urunler.map((urun,index)=>
            <UrunCard key={index} currency={currency} urun={urun} list={true}>
                
            </UrunCard>)
            }
        </Paperbase>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    console.log('fetching category' +slug)
    var currency = {}
    const res = await fetch(serverRuntimeConfig.appURL+'productfromcategories/'+ slug );
    const urunler = await res.json();
    const currest = await fetch(serverRuntimeConfig.appURL+'currency');
    currency = await currest.json();
   
    // Pass data to the page via props
    return {props: {urunler , currency}}
   
}

export default UrunList