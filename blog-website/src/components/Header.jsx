import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo'>
            BlogSite
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/create">Create Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;