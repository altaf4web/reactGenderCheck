import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
} from "mdbreact";

class FetchDatas extends React.Component {
  render() {
    return (
      <MDBCard>
        <MDBCardBody>
          <MDBCardHeader className="form-header deep-blue-gradient rounded mb-3">
            <h3 className="my-3 text-center">
              <MDBIcon icon="list" /> Results
            </h3>
          </MDBCardHeader>
          <ul className="list-group">
            <li className="list-group-item">Name: {this.props.name}</li>
            <li className="list-group-item">Gender: {this.props.gender}</li>
            <li className="list-group-item">Count: {this.props.count}</li>
            <li className="list-group-item">Probability: {this.props.probability}</li>
          </ul>
          <div className="text-center mt-4">
            <h1>{this.props.name} is <span className="badge badge-primary">{this.props.gender}</span></h1>.
          </div>
          </MDBCardBody>
          </MDBCard>
    );
  };
};

export default FetchDatas;
