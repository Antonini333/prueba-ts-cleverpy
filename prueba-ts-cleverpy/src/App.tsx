import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from './Components/UserList'
import CardCarousel from './Components/CardCarousel'
import Header from './Components/Header'
import UserPosts from './Components/UserPosts'
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Header />
      <Route exact path="/allposts">
        <CardCarousel />
      </Route>
      <Route exact path="/userlist">
        <UserList />
      </Route>
      <Route exact path="/userposts">
        <UserPosts />
      </Route>

    </Router>
  );
}

export default App;



