import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPosts } from '../Redux/actions/postActions';
import {rootStore} from '../Redux/Store'


const AllPosts: React.FC = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: rootStore) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])


  console.log(postsState.posts)
  


return (
  <div><h1>jejeje</h1></div>
)
}

export default AllPosts;

