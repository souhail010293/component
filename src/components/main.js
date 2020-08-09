import React from 'react';
import './App.css';
import Photo from './profile/ProfilPhoto';
import Name from './profile/FullName';
import Adress from './profile/Address';

const Main = () => {
  return (
  <div className="App">
  <h2 style={{color:'green',fontFamily:'arial'}}> Welcome</h2>
  <div className="linear">
  <Photo/>
  <Name/>
  </div>
  <Adress/>
  </div>
  
  );
}


export default Main ;