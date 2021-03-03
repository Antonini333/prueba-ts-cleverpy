import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPosts from './Views/AllPosts'

function App() {
  return (
    <Router>
      <Route path= "/">
        <AllPosts />
      </Route>
    
    </Router>
  );
}

export default App;



