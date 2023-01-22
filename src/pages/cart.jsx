import React, { useContext, useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "../styles/cart.css"
import LoadcartItems from '../components/LoadcartItems';
import { AuthContext } from '../authcontext/AuthContext';
import PlaceForm from './placeForm';

export default function Cart(){
    const [mycart, setMycart] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const { user } = useContext(AuthContext)
    const [placeForm, setPlaceForm] = useState(false)


    const getCart = async () => {
        setLoading(true)
        let res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/cart`);
        let json = await res.json();
        setLoading(false)
        setMycart(json)
    }
    useEffect(() => {
        getCart();
    },[])
    
    const showFoam = ()=> {
        setPlaceForm(!placeForm)
    }

// Get totla price
    let totalP = 0;
    mycart.map((ele) => {
        if(ele.userId == user.id){
            totalP += ele.price;
        }
    })
// Get totla price 

    


    // remove cartitem
    const removeProduct = async (id) => {
        // alert(id)
        
        let permite = false;
        const afterDelete = mycart.filter((ele) => ele.id !== id && ele.userId == user.id);
        setMycart(afterDelete);
        
        mycart.map((ele) => {
            if(ele.id == id && ele.userId == user.id){
                permite = true;
            }
        });

        if(permite){
            try{
                const res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/cart/${id}`,{
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                let data = await res.json();
                console.log(data)
            }catch(e){
                console.log(e)
            }
        }
    }
    // remove cartitem

  return (
    <>
    <div id="cartbody">
        <div id="cartbodyleft">
        <br />
            <hr />
            
            <div id="itemsset">
                {loading ? <h1>Loading...</h1> :
                    mycart.map((ele,i) => (ele.userId == user.id ?
                        <LoadcartItems key={i} removeProduct={removeProduct} img={ele.image} price={ele.price} desc={ele.desc} id={ele.id} userId={user.id} qty={ele.qty} /> : ""
                ))}
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
                {/* <br /> */}
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
                    <p className="price_show">{totalP}</p>
                </div>
                <div>
                    <h3>Shipping (+)</h3>
                    <p>FREE</p>
                </div>
                <div>
                    <h2>Sub Total</h2>
                    <p className="price_sho">{totalP}</p>
                </div>
                <hr />
                <div>
                    <h2>Final Payment</h2>
                    <p className="price_sh">{totalP}</p>
                </div>
            </div>
            <button id="bttmadd" onClick={showFoam}>Add to Delivery address</button>
            {placeForm ? <PlaceForm showFoam={showFoam} /> : ""}
        </div>
    </div>
    </>
  )
}
