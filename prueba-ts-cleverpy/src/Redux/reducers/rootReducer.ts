import { combineReducers } from 'redux'
import postReducer from './postReducer'

const rootReducer = combineReducers({
    posts: postReducer,
    /*user: userReducer,*/
})

export default rootReducer;


