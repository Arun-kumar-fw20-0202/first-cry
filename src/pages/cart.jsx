import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "../styles/cart.css"

export default function Cart(){
  return (
    <>
        {/* <div id="topcart">
            <a href="#">
                <img id="cartphoto" src="data:image/jpeg;base64,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" />
            </a>
            <div id="selectop">
                <select name="My Account" id="Accountoption">
                    <option>My Account</option>
                    <option>My Profile</option>
                    <option>Order History</option>
                    <option>Manage Returns</option>
                    <option>Quick Recoder</option>
                    <option>Cash Refund</option>
                    <option>Gift Certifications</option>
                    <option>Notify Me</option>
                    <option>My Shortlist</option>
                    <option> Logout</option>
                </select>
            </div>
        </div> */}
    <div id="cartbody">
        <div id="cartbodyleft">
        <br />
            <hr />
            <div id="itemsset">
                {/* Itemss */}
                <div className="box">
                    <img src="data:image/webp;base64,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" alt="" />
                    <div className="data">
                        <h2>Nike</h2>
                        <h3 className="price">Rs.299</h3>
                            <select>
                                <option value="" selected="selected">Select Qty</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        <button>Remove <i style={{color: 'red'}} className='fa fa-close'></i></button>
                    </div>
                </div>
            </div>

        </div>
        <div id="cartbodyright">
            <img id="sbiimg" src="https://cdn.fcglcdn.com/brainbees/banners/sbi_strip_13jan21.jpg" alt="" />

            <div id="offerimg">
                <span id="offers"> 
                    <img src="https://d38qkvaxh36w5.cloudfront.net/brainbees/apps/image/cart_offer_app_icon.png" alt="" />
                    OFFERFlat 30% OFF* on minimum purchase of Rs. 2499.Use Code:CART30
                </span>

            </div>
            <div id="couponid">
                <h2>Apply Coupon/Gift Certificate</h2>
                <div>
                    <input id="sspp" type="radio" value="Apply coupon" />Coupon
                    <input is="sspp" type="radio" value="Apply coupon" />Gift Certificate
                </div>
                <br />
                <div id="skpk">
                    <input type="text" placeholder="Enter Your coupon code" />

                    <button>Apply</button>
                </div>


            </div>
            <div id="paymentid">
                <div>
                    <h2>Payment Information</h2>
                </div>
                <div>
                    <h3>Value of Product(s)</h3>
                    <p className="price_show"></p>
                </div>
                <div>
                    <h3>Shipping (+)</h3>
                    <p>FREE</p>
                </div>
                <div>
                    <h2>Sub Total</h2>
                    <p className="price_sho"></p>
                </div>
                <hr />
                <div>
                    <h2>Final Payment</h2>
                    <p className="price_sh"></p>
                </div>
            </div>
            <button id="bttmadd">Add to Delivery address</button>
        </div>
    </div>
    </>
  )
}
