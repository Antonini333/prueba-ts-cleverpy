import axios from 'axios';
import {Dispatch} from 'redux';
import {PostsDispatchTypes, POSTS_LOADING, POSTS_FAIL, POSTS_SUCCESS, DELETE_POST} from './postActionTypes'

export const getPosts = () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try{
        dispatch({
            type: POSTS_LOADING
        })

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

        dispatch({
            type: POSTS_SUCCESS,
            payload: res.data
        })

    } catch(error) {
        dispatch({
            type: POSTS_FAIL
        })


    }

}

export const deletePost = (id: number) => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    
    try{
        await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        dispatch({
            type: DELETE_POST
            
        })
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        dispatch({
            type: POSTS_SUCCESS,
            payload: res.data
        })

    } catch(error) {
        dispatch({
            type: POSTS_FAIL
        })

    }
}