import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Header from './Header.js'
import FormDatas from './FormDatas.js'
import FetchDatas from './FetchDatas.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6">
            <FormDatas />
          </MDBCol>
          <MDBCol size="6">
            <FetchDatas />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;
