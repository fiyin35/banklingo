import React from 'react'
import './header.css';
import Back from '../../assets/back.png';
import Edit from '../../assets/edit.png';
import Approve from '../../assets/approve.png';
import Disable from '../../assets/disable.png';
import Delete from '../../assets/delete.png';

const header = () => {
  return (
    <div className="header__container">
      
      <div className="header__back">
        <img className="img-back" src={Back} alt="back icon"/> 
        <p className="back">Back</p>
      </div>

      <div className="header__button-menu"> 
        <div className="button-menu">Edit <img className="icon-edit" src={Edit} alt="icon"/> </div>
        <div className="button-menu">Approve <img className="icon-edit" src={Approve} alt="icon"/> </div>
        <div className="button-menu"> Disable  <img className="icon-edit" src={Disable} alt="icon"/> </div>
        <div className="button-menu-delete"> Delete   <img className="icon-edit" src={Delete} alt="icon"/></div>
      </div>
    </div>
  )
}

export default header
