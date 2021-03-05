import React, { useState } from "react";
import { useHistory } from "react-router";
import 'react-animated-slider/build/horizontal.css'
import '../Styles/styles.scss'


const UserPosts: React.FC = () => {

  const history = useHistory();
  const localStoragePosts: Storage = JSON.parse(localStorage.getItem('userPosts') || '{}')
  const [selectedPosts, setSelectedPosts] = useState<Storage>(localStoragePosts);

  const deletePost = async (id: number): Promise<void> => {
    setSelectedPosts(selectedPosts.filter(post => post.id !== id));
  };


  return (
    <div className="main_container">
      <div className="main_container_wrapper">
        <div className="back_button__box">
          <button className="back_button" onClick={() => { history.push("/userlist") }}>Go Back</button></div>
        {selectedPosts?.map(post =>
          <div key={post.id} className="card">
            <div className="card__name"><strong>User{post.userId} said:</strong></div>
            <div className="card__info__title"><strong>{post.title}</strong></div>
            <div className="card__info">{post.body}</div>
            <div className="button_box">
              <button onClick={() => { deletePost(post.id) }}>
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

