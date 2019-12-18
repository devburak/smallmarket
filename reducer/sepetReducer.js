export default function sepetReducer(state, action) {
  console.log(state)
  switch (action.type) {
    case 'updateName':
        action.user !== undefined ? state.name = action.user.name :state.name = 'Giriş'
      return {...state}
    case 'addItem':
      if(action.item !== undefined) {
        let items = state.item ||[]
        items.push(action.item)
        state.item = items
      } 
      return {...state}
    default:
      return state
  }
}

