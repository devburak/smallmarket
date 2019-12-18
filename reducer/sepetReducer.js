export default function sepetReducer(state, action) {

  switch (action.type) {
    case 'updateName':
        action.user !== undefined ? state.name = action.user.name :state.name = 'Giriş'
      return {...state}
    case 'addItem':
      if(action.item !== undefined) {
        state.push(action.item)
      } 
      return {...state}
    default:
      return state
  }
}

