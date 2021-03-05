import React, { useEffect } from "react";
import axios, { AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../Redux/actions/postActions';
import { DefaultStateI } from '../Redux/reducers/postReducer';
import { rootStore } from '../Redux/Store'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../Styles/slider-animation.css';
import '../Styles/styles.css'

const CardCarousel: React.FC = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();  /* No sé como tipar estas dos */

  const apiPosts: DefaultStateI = useSelector((state: rootStore) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  const chooseUser = async (id: number): Promise<void> => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res: AxiosResponse) => {
        localStorage.setItem('userPosts', JSON.stringify(res.data))
        setTimeout(() => {
          history.push("/userposts")
        }, 500);
      }).catch((error) => {
        console.log(error);
      })
  }


  return (
    <div>
      <div className="wrapper">
        <h1>Check out our latest posts</h1>
      </div>
      <Slider className="slider-wrapper">
        {apiPosts.posts?.map(post =>
          <div
            key={post.id}
            className="slider-content">
            <div className="inner">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => { chooseUser(post.userId) }}>MORE POSTS FROM THIS AUTHOR</button>
            </div>
            <section>
              <img src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="Your face here" /> <span>
                Posted by <strong>User{post.userId}</strong>
              </span>
            </section>
          </div>)}
      </Slider>
    </div>

  );
};

export default CardCarousel;

