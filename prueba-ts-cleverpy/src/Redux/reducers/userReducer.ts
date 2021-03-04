import {USERS_FAIL, USERS_SUCCESS, USERS_LOADING, UsersType, UsersDispatchTypes} from '../actions/userActionTypes';

interface DefaultStateI {
    loading: boolean,
    users?: UsersType
}

const defaultState: DefaultStateI = {
loading: false
}

const userReducer = (state: DefaultStateI = defaultState, action: UsersDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case USERS_FAIL:
      return {
        loading: false,
      }
      case USERS_LOADING:
        return {
          loading: true
        }
        case USERS_SUCCESS:
          return {
            loading: false,
            users: action.payload
          }
          default: 
          return state
  }
}

export default userReducer;