export default function userReducer(state, action) {
    switch (action.type) {
      case 'updateName':
          action.user !== undefined ? state.name = action.user.name :state.name = 'Giriş'
        return {...state}
      default:
        return state
    }
  }