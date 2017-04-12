// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import AddStudent from './AddStudent';

// ------------- Component
const Students = (props) => {
  return (
    <div>
      <h3>Add a Student </h3>
      <AddStudent />
      <h1>These are the Students!</h1>
      <ul>
        { props.allStudents.map(student => (
          <li key={student.id} ><NavLink to={`/students/${student.name}`}>{student.name}</NavLink></li>
        )) }
      </ul>
      {props.children}
    </div>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  console.log('~~state in Students ', state);
  return {
    allStudents: state.students.allStudents,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
