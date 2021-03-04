import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../Redux/actions/userActions'
import {rootStore} from '../Redux/Store'
import axios from 'axios'
import './UserList.scss'
import { useHistory } from 'react-router';



const UserList: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const usersState = useSelector((state: rootStore) => state.users)

  useEffect(() => {
   dispatch(getUsers())
  }, [dispatch])
  

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

  <div className="userProfile">
    <div className="userContainer">
     {usersState.users?.map(user =>
          <div key={user.id} className="infoUser">
    
     <div className='inside'><strong>{user.name} (User{user.id}) </strong></div>
            <div className='inside'>City: <em>{user.address.city}</em></div>
            <div className='inside'>Website: <em>www.{user.website}</em></div>
            <div className='buttonbox'>
           <button className='userButton' onClick={() => (chooseUser(user.id))}>Check my posts</button></div>
          </div>
      
    )}
  
  </div>
  </div>
  )

}

export default UserList;

