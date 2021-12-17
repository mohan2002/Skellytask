import React from 'react';
import "./Styles/Maincomponent.css"
import assets from '../Assets/Assets';
import {HiOutlineTruck} from 'react-icons/hi'

function MainComponent() {
  return (
    <div className="maincomp-container">

      {/* Main content */}
      
      <div className="main-content">
        {/* Login signup and shopping details */}
        <div className="main-left">

            <div className="auth-btns">
              <button className="auth-btn1 clr">LOG IN</button>
              <button className="auth-btn1">SIGN UP</button>
            </div>
            
            <div>
              <p className="shipping">Shipping information</p>
              <div className="inputs">
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Address"/>
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Last name"/>
                <input type="text" placeholder="Postal / ZIP"/>
                <input type="text" placeholder="Phone number"/>
                <input type="text" placeholder="Poland"/>
              </div>
            </div>

        </div>


        {/* Payment and delivery method */}
        <div className="main-center">
          <div>
            <p>Payment method</p>
            <div className='payments'>
              <div className='logobox'><img src={assets.Paypal} className='logos'/></div>
              <div className='logobox'><img src={assets.Visa} className='logos'/></div>
              <div className='logobox'><img src={assets.Mastercard} className='logos'/></div>
              <div className='logobox'><img src={assets.Maestro} className='logos'/></div>
              <div className='logobox'><img src={assets.Discover} className='logos'/></div>
              <div className='logobox'><img src={assets.Ideal} className='logos'/></div>
            </div>
          </div>

          <div>
            <p>Delivery method</p>
            <div className='delivery'>
              <div className='deliverybox'>
                <img src={assets.Inpost} className='logos'/>
                <p>$20.00</p>
              </div>

              <div className='deliverybox'>
                <img src={assets.Dpd} className='logos'/>
                <p>$12.00</p>
              </div>

              <div className='deliverybox'>
                <img src={assets.DHL} className='logos'/>
                <p>$15.00</p>
              </div>

              <div className='deliverybox'>
                <img src={assets.FedEx} className='logos'/>
                <p>$10.00</p>
              </div>
            </div>
          </div>
        </div>



        {/* Your cart */}
        <div className="main-right">
          <p>Your cart</p>

          <div>

            <div>
              
              <div  className='pd'>
                <div className='products'>
                  <img src={assets.Whiteshirt} className='shirt'/>
                  <div className='products-details'>
                    <p>T-Shirt</p>
                    <p>Summer Vibes</p>
                    <p className='code'>#261311</p>
                  </div>
                </div>
                <div>
                  <p>$89.99</p>
                </div>
              </div>
              
              <div className='pd'>
                <div className='products'>
                  <img src={assets.Blackshirt} className='shirt'/>
                  <div className='products-details'>
                    <p>Black Slim</p>
                    <p>Fit T-Shirt</p>
                    <p className='code'>#212315</p>
                  </div>
                </div>
                <div>
                  <p>$69.99</p>
                </div>
              </div>

            </div>


            <div className='totalcost'>
              <p>Total cost</p>
              <p className='dls'>$159,98</p>
            </div>

          </div>

          <div className='remarks'>
            <div>
              <HiOutlineTruck style={{height:"20px",width:"20px"}}/>
            </div>
            <p>You are <span>$30,02</span> away from free shipping</p>
          </div>


        </div>


      </div>




      {/* Back and buttons */}
      <div className="bottom-btns">
          <div className='back'>
            <i class="fas fa-arrow-left"></i>
            <p>Back</p>
          </div>

          <div className='continuebtns'>
              <button className='shopbtn'>CONTINUE SHOPPING</button>
              <button className='shopbtn prcd'>PROCEED TO PAYMENT</button>
          </div>
      </div>


    </div>
  );
}

export default MainComponent;
