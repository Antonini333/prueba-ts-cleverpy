import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getPosts } from '../Redux/actions/postActions';
import {rootStore} from '../Redux/Store'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../slider-animation.css';
import '../styles.css'

const CardCarousel: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cardPosts = useSelector((state: rootStore) => state.posts)
    
    useEffect(() => {
        dispatch(getPosts())
      },[dispatch])
      

      const chooseUser = async (id: number) =>{
        await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) =>{
           localStorage.setItem('userPosts', JSON.stringify(res.data))
           setTimeout(() => {
            history.push("/userposts")
          }, 1000);
        }).catch((error) =>{
          console.log(error);
        })
      }
      

  return (
    <div>
		<div className="wrapper">
			<h1>Check out the latest posts!</h1>
		</div>
      <Slider className="slider-wrapper">
      {cardPosts.posts?.map(post =>
      <div 
      key={post.id} 
      className="slider-content"
        	style={{ background: `url('') no-repeat center center` }}>
        <div className="inner">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={() => {chooseUser(post.userId)}}>More posts from this writer</button>
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

