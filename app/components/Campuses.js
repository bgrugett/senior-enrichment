// Required libraries
import React from 'react';
import NavLink from './NavLink';
import { connect } from 'react-redux';
import AddCampus from './AddCampus';

// ------------- Component
const Campuses = (props) => {
  return (
    <div>
    <h3>Add a Campus </h3>
      <AddCampus />
      <h1>These are the Campuses!</h1>
      <ul>
        { props.allCampuses.map(campus => (
           <li key={campus.id} ><NavLink to={`/campuses/${campus.name}`}>{campus.name}</NavLink></li>
        )) }
      </ul>
      {props.children}
    </div>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  return {
    allCampuses: state.campuses.allCampuses,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
