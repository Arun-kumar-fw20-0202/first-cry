import { useState, useEffect, useContext } from "react";
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import { useParams } from "react-router-dom";
import "../styles/singleProduct.css"
import { AuthContext } from "../authcontext/AuthContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


$(document).on("click",".singleDropdown",function(e){
    $(this).toggleClass("active")
})

function SingleProduct2(){
    const [singleProduct, setSingleProduct] = useState({})
    const [qty, setQty] = useState(1)
    const {id} = useParams();
    const { user, isAuth } = useContext(AuthContext);

    // Sweet alerts
    const notify = () => toast.success("Item Added to your cart 👍");
    const warning = () => toast.warn("Please Login First");

    const handleQty = (val)=>{
        setQty(qty+val)
    }

    const fetchData = async () => {
        const res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/boys/${id}`)
        const json = await res.json()
        setSingleProduct(json)
    }

    // console.log(singleProduct)

    useEffect(() => {
        fetchData();
      }, []);

    const { desc, image, price, sprice, mprice } = singleProduct;

    const addTocart = async () =>{
        notify()
        let newCart = {desc,image,price,sprice,mprice,qty,userId: user.id,proId:Number(id)}
        let res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/cart`,{
            method: 'POST',
            body: JSON.stringify(newCart),
            headers:{
                    'Content-Type': 'application/json',
            }
        })
    }

    const handleAuth = () => {
        warning()
    }

    return (
        <>
        <div className="singleMain">
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover  theme="dark" />
            <div className="singleImg">
                <img src={image} alt="" />
            </div>
            <div className="singleDetails">
                <h1>{desc}</h1>
                <h4>MRP ₹{price}</h4>
                <p>Inclusive of all Taxes</p>
                <p>Mix & Match: Buy 2, Get 2</p>
                
                <div className="singleQty">
                    <input onChange={()=> ""} type="number" value={qty} />
                    <button disabled={qty <= 1} style={{background: qty <= 1 ? "#cccc" : "#000"}} onClick={()=>handleQty(-1)}>-</button>
                    <button disabled={qty == 10} style={{background: qty >= 10 ? "#cccc" : "#000"}} onClick={()=>handleQty(1)}>+</button>
                    {isAuth ? <button onClick={addTocart} style={{background: "#000"}}>ADD TO CART</button> : <button onClick={handleAuth} style={{background: "#000"}}>ADD TO CART</button>
                    }
                </div>

                <h5>In Stock</h5>
                <div className="singleInputBx">
                    <input type="number" onChange={()=> ""} placeholder="Enter Your Pincode"  />
                    <button>Check</button>
                </div>
                <br />
                <div className="singleLogo">
                    <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwaae72104/images/get-it-on-day.svg" alt="" />
                    <span>Enter Pincode to Check Estimation Days</span>
                </div>
                {/*  */}
                    <div className="singleDropdown">
                        <div className="singleDown">
                            <h4>FRAGRANCE 
                                <span>
                                    <i className="fa fa-chevron-up"></i>
                                </span>
                            </h4>
                            <span>Candied Apples, Crisp Pears, Oranges with Natural Essential Oils</span>
                        </div>
                    </div>
                    <div className="singleDropdown">
                        <div className="singleDown">
                            <h4>OVERVIEW 
                                <span>
                                    <i className="fa fa-chevron-up"></i>
                                </span>
                            </h4>
                            <span>The key to unwrapping the warm spirit of Christmas: this candied fruit treat. Candle comes
                                topped with a decorative lid.</span>
                        </div>
                    </div>
                    <div className="singleDropdown">
                        <div className="singleDown">
                            <h4>MORE INFO 
                                <span>
                                    <i className="fa fa-chevron-up"></i>
                                </span>
                            </h4>
                            <span>
                                <h6>Country of Origin:</h6>
                                <p>United States of America</p>
                                <h6>Packer/lmporter Details :</h6>
                                <p>Apparel Group India Pvt Ltd. 907, B Wing, Mittal Commercia, Near Mittal Commercial
                                    Estate, Asanpada,Marol, Andheri (East) Mumbai</p>
                            </span>
                        </div>
                    </div>
                {/*  */}
            </div>
        </div>
        </>
    )
}

export default SingleProduct2