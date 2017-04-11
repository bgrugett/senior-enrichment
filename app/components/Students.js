// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';

// ------------- Component
const Students = (props) => {
  console.log('~~~Students props ', props);
  return (
    <div>
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
    selectedStudent: state.students.selectedStudent,
    allStudents: state.students.allStudents,
    allCampuses: state.campuses.allCampuses,
    selectedCampus: state.campuses.selectedCampus
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
