export default function sepetReducer(state, action) {
  switch (action.type) {
    case 'updateName':
        action.user !== undefined ? state.name = action.user.name :state.name = 'Giriş'
      return {...state}
    default:
      return state
  }
}