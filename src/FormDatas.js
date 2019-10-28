import React from "react";
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";


class FormDatas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state.value
    axios.get(`https://api.genderize.io?name=${ user }`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <MDBCard>
        <MDBCardBody>
          <MDBCardHeader className="form-header deep-blue-gradient rounded">
            <h3 className="my-3 text-center">
              <MDBIcon icon="user" /> Check Gender
            </h3>
          </MDBCardHeader>
            <div className="grey-text">
              <MDBInput
                label="Enter Any Name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>

          <div className="text-center mt-4">
            <MDBBtn
              color="light-blue"
              className="mb-3"
              type="submit"
            >
              Check
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
      </form>
    );
  }
}


export default FormDatas;
