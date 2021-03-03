import { Reducer } from 'redux';
import {
    PostActions,
    PostActionTypes,
  } from '../actions/PostActions';


export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostState {
    readonly posts: IPost[];
}

const initialPostState: IPostState = {
    posts: [],
}

export const postReducer: Reducer<IPostState, PostActions> = (
    state = initialPostState,
    action
  ) => {
    switch (action.type) {
      case PostActionTypes.GET_ALL: {
        return {
          ...state,
          posts: action.posts,
        };
      }
      default:
        return state;
    }
  };