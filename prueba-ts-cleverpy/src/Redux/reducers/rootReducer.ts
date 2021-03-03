import { combineReducers } from 'redux'
import {postReducer} from './postReducer'

const rootReducer = combineReducers({
    posts: postReducer,
    /*user: userReducer,*/
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;


