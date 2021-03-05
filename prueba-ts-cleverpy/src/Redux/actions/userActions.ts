import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { UsersDispatchTypes, USERS_LOADING, USERS_FAIL, USERS_SUCCESS, USER_LOGIN } from './userActionTypes'

export const getUsers = () => async (dispatch: Dispatch<UsersDispatchTypes>): Promise<void> => {
    try {
        dispatch({
            type: USERS_LOADING
        })

        const res: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({
            type: USERS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: USERS_FAIL
        })


    }

}

export const userLogin = (body) => async (dispatch: Dispatch<UsersDispatchTypes>): Promise<void> => {
    try {
        const res: AxiosResponse = await axios.post('no existe el endpoint', body)

        dispatch({
            type: USER_LOGIN,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: USERS_FAIL
        })


    }

}