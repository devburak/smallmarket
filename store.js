import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'


const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export class Store {
    @observable lastUpdate = 0
    @observable sepet ={}
    @observable userInformation ={name:undefined,username:undefined,baerer:undefined}
    @observable login= false

    @action login =(username,password)=>{
        if(username && password){
        this.login =true
        this.userInformation.username = username
        this.userInformation.name ='static'
        this.userInformation.baerer ='asdfıqwjeğrıjvm'
        }
    }
}

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {}
}

