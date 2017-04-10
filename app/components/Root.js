import React from 'react';
//import {NavLink} from './NavLink';
import { Link } from 'react-router';
//console.log('~~Navlink ', Navlink);
// export default React.createClass({
//   render() {
  const Root = function(props) {
    return (
      <div>
        <h1>Campus Management</h1>
        <ul role="nav">
          <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
          <li><Link to="/about">Students</Link></li>
          <li><Link to="/repos">Campuses</Link></li>
        </ul>
        {props.children}
      </div>
    );
  };
export default Root;
//return ( <Link {...this.props} activeClassName="active" /> );
