import React from 'react';
import NavLink from './NavLink';

  const Home = function(props) {
    return (
      <div>
        <h1>Campus Management</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/students">Students</NavLink></li>
          <li><NavLink to="/campuses">Campuses</NavLink></li>
        </ul>
        {props.children}
      </div>
    );
  };
export default Home;
