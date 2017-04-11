import React from 'react';
import { connect } from 'react-redux';

const Campus = (props) => {
  console.log('~~~props in Campus ', props);
    return (
      <div>
        <h2>Campus Name: {props.params.name}</h2>
      </div>
    );
};


// ------------- Container
const mapStateToProps = (state) => {
  //console.log('~~state in Capus ', state);
  return {
    selectedStudent: state.students.selectedStudent,
    allStudents: state.students.allStudents,
    allCampuses: state.campuses.allCampuses,
    selectedCampus: state.campuses.selectedCampus
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campus);

