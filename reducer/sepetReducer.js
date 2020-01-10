export default function sepetReducer(state, action) {
  console.log(state)
  switch (action.type) {
    case 'updateName':
        action.user !== undefined ? state.name = action.user.name :state.name = 'Giriş'
      return {...state}
    case 'addItem':
      if(action.item !== undefined) {
        let items = []
        
        try{
         let  temp = JSON.parse(localStorage.getItem('sepet'))
         if(temp) items = temp
        }
        catch(e){
          console.log(e)
        }
        console.log(items)
        items.push(action.item) 
        state.item = items
        localStorage.setItem('sepet', JSON.stringify( state.item))
      } 
      return {...state}
    default:
      return state
  }
}

