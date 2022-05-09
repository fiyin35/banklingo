import React from 'react';
import './navbar.css';
import Notification from '../../assets/bell.png';
import Dropdown from '../../assets/Icon.png';

const navbar = () => {
  return (
    <div className="navbar__container">
        <div className="navbar-header">
            <p className="navbar-business-reg"> Business Registration</p> 
        </div>
        
        <div className="navbar__avatars"> 
            <div className="avatars"> 
              <img className="notification" src={Notification} alt="Notification" /> 
                <p className="initials"> EA</p>
                <p className="name">Eniola Adegbuyi</p>
                <img className="icon" src={Dropdown} alt="dropdown" />
            </div>
        </div>
    </div>
  )
}

export default navbar