import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from './Components/UserList'
import CardCarousel from './Components/CardCarousel'
import Header from './Components/Header'
import UserPosts from './Components/UserPosts'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path= "/">
        <CardCarousel />
      </Route>
      <Route exact path ="/userlist">
     <UserList/>
      </Route>
      <Route exact path ="/userposts">
        <UserPosts/>
      </Route>
    
    </Router>
  );
}

export default App;



