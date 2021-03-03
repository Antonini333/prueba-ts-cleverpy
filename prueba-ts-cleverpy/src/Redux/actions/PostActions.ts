import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Post Typing
import { IPost, IPostState } from '../reducers/postReducer';

// Create Action Constants
export enum PostActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface IPostGetAllAction {
  type: PostActionTypes.GET_ALL;
  posts: IPost[],
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type PostActions = IPostGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllPosts: ActionCreator<
  ThunkAction<Promise<any>, IPostState, null, IPostGetAllAction>
> = () => {
    
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        posts: response.data.results,
        type: PostActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};