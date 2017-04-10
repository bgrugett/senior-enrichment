// modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';
export default class NavLink extends React.Component {
  render() {
    return ( <Link {...this.props} activeClassName="active" /> );
  }
}

// const NavLink = function(props) {
//   return <Link {...props} activeClassName="active" />;
// };

//export default NavLink;
