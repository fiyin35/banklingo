import React from 'react';
import './businessDetails.css';
import Currency from '../../assets/currency.png';

const businessDetails = () => {
  return (
    <div className="businessDetails__container">

      <div className="businessDetails"> 
          <p className="gateway__details"> Business Details</p>

          <p className="basic-details">Basic Details</p>
              <div className="gateway-key">
                <p>Full Name</p>
                <p>Eniola Adegbuyi</p>
              </div>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Email</p>
                <p>madegbuyi@gmail.com</p>
              </div>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Phone number</p>
                <p>+234 906 6216 280</p>
              </div>

              <p className="business-details">Business Details</p>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Business name</p>
                <p>Mayor Tech Services</p>
              </div>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Account ID</p>
                <p>23892910</p>
              </div>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Bank Account </p>
                <p>1423823092</p>
              </div>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Business Level </p>
                <p>Level 1</p>
              </div>

              <div className="horizonttal"/>

              <div className="gateway-key">
                <p>Address </p>
                <p>10, Alhaji muniru close, Bode thomas, Surulere, Lagos</p>
              </div>

              <div className="horizonttal"/>
      </div>

      <div className="gateway__container">

        <div className="wallet">
              <div className="gateway__wallet"> 
                <p className="currency"> Cross Border Wallet</p>
                <p className="amount">#0.00</p>
                <div className="fund-wallet">Fund Wallet</div>
              </div>

              <div className="gateway__currency"> 
                <img src={Currency} alt="currency" />
              </div>
          </div>

        <div className="gateway"> 

          <p className="gateway__details"> Gateway Details</p>
              <div className="gateway-key">
                <p>Gateway URL</p>
                <p>Nil</p>
              </div>

              <div className="horizontal"/>

              <div className="gateway-key">
                <p>Client ID</p>
                <p>Nil</p>
              </div>

              <div className="horizontal"/>

              <div className="gateway-key">
                <p>ClienT Secret</p>
                <p>Nil</p>
              </div>

              <div className="horizontal"/>

              <div className="gateway-key">
                <p>Nonce</p>
                <p>Nil</p>
              </div>

              <div className="horizontal"/>


              <div className="update-gateway"> UpdaTe GaTeway seTTings</div>
        </div>

        <p className="setexchange">SeT Exchange RaTe? Click here To Cross Border</p>

      </div>

    </div>
  )
}

export default businessDetails
