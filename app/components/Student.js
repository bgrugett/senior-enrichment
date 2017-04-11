import React from 'react';
import { connect } from 'react-redux';

const Student = (props) => {
  console.log('~~~props in Student ', props);
    return (
      <div>
        <h2>Student Name: {props.params.name}</h2>
        <h3>Student email: {props.selectedStudent.email}</h3>
        <h3>Student campus: {props.selectedStudent.campus.name}</h3>
      </div>
    );
};


// ------------- Container
const mapStateToProps = (state) => {
  console.log('~~state in Student ', state);
  return {
    selectedStudent: state.students.selectedStudent,
    allStudents: state.students.allStudents,
    allCampuses: state.campuses.allCampuses,
    selectedCampus: state.campuses.selectedCampus
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Student);

