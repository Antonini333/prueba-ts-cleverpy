import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../Redux/actions/userActions'
import { rootStore } from '../Redux/Store'
import { DefaultStateI } from '../Redux/reducers/userReducer';
import '../Styles/styles.scss'
import { useHistory } from 'react-router';



const UserList: React.FC = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const usersState: DefaultStateI = useSelector((state: rootStore) => state.users)

  useEffect(() => {
    dispatch(getUsers())
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

    <div className="main_container">
      <div className="main_container_wrapper">
        {usersState.users?.map(user =>
          <div key={user.id} className="card">

            <div className="card__info__name"><strong>{user.name} (User{user.id}) </strong></div>
            <div className="card__info">City: <em>{user.address.city}</em></div>
            <div className="card__info">Website: <em>www.{user.website}</em></div>
            <div className="user_button__box">
              <button className="user_button" onClick={() => (chooseUser(user.id))}>Check my posts</button></div>
          </div>

        )}

      </div>
    </div>
  )

}

export default UserList;

