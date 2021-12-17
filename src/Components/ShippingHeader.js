import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import {RiTruckLine} from "react-icons/ri"
import "./Styles/ShippingHeader.css"

function ShippingHeader() {
  return (
    <div className="shippingheader-container">
      <div className="content">
        <p>Shipping and Payment</p>
      </div>
      <div className="rightmost">
          <div className="cart">
            <AiOutlineShoppingCart style={{height:"30px",width:"20px",color:"rgba(0, 0, 0, 0.723)"}}/>
          </div>
          <hr className="line"></hr>
          <div className="truck">
            <RiTruckLine style={{height:"30px",width:"20px",color:'white'}}/>
          </div>
          
      </div>
    </div>
  );
}

export default ShippingHeader;
