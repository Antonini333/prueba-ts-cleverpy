import React from 'react';
import { Link } from 'react-router-dom'

const Header: React.FC = () =>{

  return(
    <header>
      <section>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/userlist">People</Link></div>
      <div><Link to="/">All Posts</Link></div>
          
       </section>
    </header>
  )
}

export default Header; 