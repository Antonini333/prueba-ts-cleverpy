import axios, { AxiosResponse } from 'axios';
import {Dispatch} from 'redux';
import {UsersDispatchTypes, USERS_LOADING, USERS_FAIL, USERS_SUCCESS} from './userActionTypes'

export const getUsers = () => async (dispatch: Dispatch<UsersDispatchTypes>): Promise<void> => {
    try{
        dispatch({
            type: USERS_LOADING
        })

        const res: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({
            type: USERS_SUCCESS,
            payload: res.data
        })

    } catch(error) {
        dispatch({
            type: USERS_FAIL
        })


    }

}