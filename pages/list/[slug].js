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
    const {urunler} = props
    console.log(urunler)
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
    console.log('fetching category' +slug)
  
    const res = await fetch(serverRuntimeConfig.appURL+'productfromcategories/'+ slug );
    const urunler = await res.json();
      
    // Pass data to the page via props
    return { props: { urunler } }
}

export default UrunList