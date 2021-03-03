import React, {useState} from "react";

const AllPosts: React.FC = () => {
  
  const [posts, setPosts]= useState([])
  let callAPI = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data))
  .catch(error => console.log(error));

  console.log(posts)
  
  
  return (
    <div>
      <h1>{posts?.map(post => 
        <div>{post.title}</div>)}</h1>
    </div>
    
  )
}

export default AllPosts;