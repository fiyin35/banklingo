import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import BusinessDetails from '../../components/businessDetails/businessDetails';
import './mainbar.css';

const mainbar = () => {
  return (
    <div className="mainbar__container">
      <Navbar />
      <Header /> 
      <BusinessDetails />
    </div>
  )
}

export default mainbar
