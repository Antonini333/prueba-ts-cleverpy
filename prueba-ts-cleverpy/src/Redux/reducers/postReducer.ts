import {POSTS_FAIL, POSTS_SUCCESS, POSTS_LOADING, DELETE_POST, PostsType, PostsDispatchTypes} from '../actions/postActionTypes';
interface DefaultStateI {
    loading: boolean,
    posts?: PostsType
}

const defaultState: DefaultStateI = {
loading: false
}

const postReducer = (state: DefaultStateI = defaultState, action: PostsDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case POSTS_FAIL:
      return {
        loading: false,
      }
      case POSTS_LOADING:
        return {
          loading: true
        }
        case POSTS_SUCCESS:
          return {
            loading: false,
            posts: action.payload
          }
          case DELETE_POST:
            return {
              loading: true
            }
          default: 
          return state
  }
}

export default postReducer;