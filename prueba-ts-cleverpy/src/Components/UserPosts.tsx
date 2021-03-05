import React, { useState } from "react";
import { useHistory } from "react-router";
import 'react-animated-slider/build/horizontal.css'
import '../slider-animation.css';
import './UserList.scss'
import { PostsType } from "../Redux/actions/postActionTypes";


const UserPosts: React.FC = () => {

  const history = useHistory();
  const localPosts: Storage = JSON.parse(localStorage.getItem('userPosts') || '{}')
  const [selectedPosts, setSelectedPosts]= useState<Storage>(localPosts);

  const deletePost = async (id: number): Promise<void> => {
    setSelectedPosts(selectedPosts.filter(post => post.id !== id)); 
   };

  
  return (
    <div className="userProfile">
      <div className="userContainer">
        <div className="backButtonBox">
      <button className="backButton" onClick={() => {history.push("/userlist")}}>Go Back</button></div>
      {selectedPosts?.map(post => 
        <div key={post.id} className="infoUser">
        <div className="userName"><strong>User{post.userId} said:</strong></div>
        <div className='inside'><strong>{post.title}</strong></div>
        <div className='inside'>{post.body}</div>
        <div className="buttonbox">
        <button onClick={() => {deletePost(post.id)}}>
              Delete Post
            </button>
            </div>
      </div>
        )}
    </div>
    </div>
    
  );
};



export default UserPosts;

