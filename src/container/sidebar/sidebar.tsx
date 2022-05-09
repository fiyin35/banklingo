import React from 'react'
import "./sidebar.css";
import logo from "../../assets/logo.png"
import Virtual from "../../assets/virtual.png"
import Usermanagement from "../../assets/usermanagement.png"
import Settings from "../../assets/settings.png"
import Transactions from "../../assets/transactions.png"
import Dashboard from "../../assets/dashboard.png"
import Identity from "../../assets/identity.png"
import Business from "../../assets/business.png"
import Terminals from "../../assets/terminals.png"
import Cross from "../../assets/cross.png"


const sidebar = () => {
  return (
    <div className="sidebar__container">
        <div className="sidebar__upper">
            <div className="sidebar__logo">
                <img className="logo" src={logo} alt="logo"/>
                <p className="logo__text"> Business Portal </p>
            </div>

            <div className="sidebar__business-name">
                <p className="business_name"> Business name</p>
                <p className="id">ID: 293820</p>
            </div>

            <div className="sidebar__dashboard">
                <div className="sidemenu"> <img className="icon-dash" src={Dashboard} alt="dashboard"/> <p className="sidebar-menu-item"> Dashboard</p></div>
            </div>

            <div className="horizontal-rule"/>

            <div className="sidebar__your-business">
                <p className="your-business">YOUR BUSINESS</p>
            </div>
            
            <div className="sidebar__content">
                <div className="sidebar-menu"> <img className="icon-dash" src={Business} alt="dashboard"/> <p className="sidebar-menu-item-business">Business</p> </div>
                <div className="sidebar-menu"> <img className="icon-dash" src={Usermanagement} alt="usermanagement"/> <p className="sidebar-menu-item">User Management</p> </div>
                <div className="sidebar-menu"> <img className="icon-dash" src={Virtual} alt="virtual"/> <p className="sidebar-menu-item">Virtual Accounts</p> </div>
                <div className="sidebar-menu"> <img className="icon-dash" src={Terminals} alt="terminals"/> <p className="sidebar-menu-item">Terminals</p> </div>
                <div className="sidebar-menu"> <img className="icon-dash" src={Identity} alt="identity"/> <p className="sidebar-menu-item">Identity Validation</p> </div>
                <div className="sidebar-menu"> <img className="icon-dash" src={Cross} alt="cross"/> <p className="sidebar-menu-item">Cross Border</p> </div>
                <div className="sidebar-menu"> <img className="icon-dash" src={Transactions} alt="transaction"/> <p className="sidebar-menu-item">Transactions</p> </div>
            </div>

            <div className="horizontal-rule"/>

            <div className="sidebar-menu settings"> <img className="icon-dash" src={Settings} alt="settings"/> <p className="sidebar-menu-item">Settings</p> </div>

        </div>

        <div className="sidebar__lower">
            <p className="sidebar-built"> Built by <span className="banklingo"> Banklingo</span> </p>    
         </div>
    </div>
  )
}

export default sidebar
