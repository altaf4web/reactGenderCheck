import React from 'react';
import { MDBContainer } from "mdbreact";
import Header from './Header.js';
import FormDatas from './FormDatas.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MDBContainer>
        <FormDatas />
      </MDBContainer>
    </div>
  );
}

export default App;
