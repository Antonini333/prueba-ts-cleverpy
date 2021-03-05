export const USERS_LOADING = "USERS_LOADING"
export const USERS_SUCCESS = "USERS_SUCCESS"
export const USERS_FAIL = "USERS_FAIL"
export const USER_LOGIN = "USER_LOGIN"

export type UsersType = [{
    id: number,
    name: string,
    website: string,
    address: {
        city: string
    },
    email?: string,
    password?: string
}]

interface usersLoading {
    type: typeof USERS_LOADING
}

interface usersFail {
    type: typeof USERS_FAIL
}

interface usersSuccess {
    type: typeof USERS_SUCCESS,
    payload: UsersType
}

interface userLogin {
    type: typeof USER_LOGIN,
    payload: UsersType
}

export type UsersDispatchTypes = usersLoading | usersFail | usersSuccess | userLogin