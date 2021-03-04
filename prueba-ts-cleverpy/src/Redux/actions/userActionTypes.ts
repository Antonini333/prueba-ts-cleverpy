export const USERS_LOADING = "USERS_LOADING"
export const USERS_SUCCESS = "USERS_SUCCESS"
export const USERS_FAIL = "USERS_FAIL"

export type UsersType = [{
    id: number,
    name: string,
    website: string,
    address: {
        city: string
    }
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

export type UsersDispatchTypes = usersLoading | usersFail | usersSuccess