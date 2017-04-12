import React from 'react';
import { connect } from 'react-redux';
import {addStudent} from '../reducers/studentReducer';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  email: '',
                  campusId: 1
                };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let studentData = {name: this.state.name, email: this.state.email, campusId: this.state.campusId};
    this.props.addStudent(studentData);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// ------------- Container
const mapStateToProps = (state) => {
  console.log('~~state in Students ', state);
  return {
    allCampuses: state.students.allCampuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (studentData) => {
      dispatch(addStudent(studentData));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
