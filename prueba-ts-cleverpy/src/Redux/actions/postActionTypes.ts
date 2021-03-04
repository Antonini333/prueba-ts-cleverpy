export const POSTS_LOADING = "POSTS_LOADING"
export const POSTS_SUCCESS = "POSTS_SUCCESS"
export const POSTS_FAIL = "POSTS_FAIL"
export const DELETE_POST = "DELETE_POST"

export type PostsType = [{
    userId: number,
    id: number,
    title: string,
    body: string
}]

interface postsLoading {
    type: typeof POSTS_LOADING
}

interface postsFail {
    type: typeof POSTS_FAIL
}

interface postsSuccess {
    type: typeof POSTS_SUCCESS,
    payload: PostsType
}

interface deletePost {
    type: typeof DELETE_POST
}

export type PostsDispatchTypes = postsLoading | postsFail | postsSuccess | deletePost