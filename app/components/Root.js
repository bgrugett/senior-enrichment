import React from 'react';
import NavLink from './NavLink';
//import { Link } from 'react-router';
//console.log('~~Navlink ', Navlink);
// export default React.createClass({
//   render() {
  const Root = function(props) {
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
export default Root;
//return ( <Link {...this.props} activeClassName="active" /> );
