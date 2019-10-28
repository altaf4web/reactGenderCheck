import React from 'react';
import logo from './logo.svg';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Header() {
  return (
    <div className="App-header">
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4"><img src={logo} className="App-logo" alt="logo" /></MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Header;
