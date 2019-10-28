import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
} from "mdbreact";

const FetchDatas = () => {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardHeader className="form-header deep-blue-gradient rounded mb-3">
          <h3 className="my-3 text-center">
            <MDBIcon icon="list" /> Results
          </h3>
        </MDBCardHeader>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        </MDBCardBody>
        </MDBCard>
  );
};

export default FetchDatas;
