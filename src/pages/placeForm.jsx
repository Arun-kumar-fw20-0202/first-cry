import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/AuthContext';
import "../styles/placeForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const details = {
    name: "",
    phone: "",
    pincode: "",
    address: "",
    payment: ""
}
export default function PlaceForm({ showFoam }) {
    const [uD, setUd] = useState(details)
    const { user } = useContext(AuthContext)
    const [mycart, setMycart] = useState([])
    const {name, phone, pincode, address, payment} = uD;
    const warning = () => toast.error('This Payment method is not available at the moment !')
    const navigate = useNavigate();

    var future = new Date();
    future.setDate(future.getDate() + 3);
    let myDate = (future.getUTCFullYear()) + "/" + (future.getMonth() + 1)+ "/" + (future.getUTCDate());

    const handleChange = (e) => {
        let val = e.target.value;
        setUd({...uD, [e.target.name] : val})
    }

    // 
    const getCart = async () => {
        let res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/cart`);
        let json = await res.json();
        setMycart(json)
    }
    useEffect(() => {
        getCart();
    },[])
    // 
    
    
    
    let products = []
    mycart.map((ele) => {
        if(ele.userId == user.id){
            products.push(ele)
        }
    })
    const handlePlace = async (e) => {
        e.preventDefault();
        let userData = {
             userId: user.id ,name, phone, pincode, address, payment,orderData: myDate,status: false, items: products
        }

        if(name == "" || name == null){
            const nameWarning = () => toast.error('Please fill your name !');
            nameWarning()
        }else if(phone == ""){
            const nameWarning = () => toast.error('Please Enter your mobile number !');
            nameWarning()
        }else if(pincode == ""){
            const nameWarning = () => toast.error('Please fill your pincode !');
            nameWarning()
        }else if(address == ""){
            const nameWarning = () => toast.error('Please fill your address !');
            nameWarning()
        }else if(payment == ""){
            const nameWarning = () => toast.error('Please select payment method !');
            nameWarning()
        }else if(payment == "DC"){
            warning()
        }else if(payment == "CC"){
            warning()
        }else{

            let res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/order`,{
                method: 'POST',
                body: JSON.stringify(userData),
                headers:{
                        'Content-Type': 'application/json',
                }
            })
            const placeSuccess = () => toast.success('Order placed 🚋 !');
            placeSuccess()
            setTimeout(function () {
                navigate("/orderplaced")
            },500)
        }
    }

  return (
    <div className='pForm'>
        <ToastContainer />
        <form>

            <div className="pBox">
                <i id='closePlaceform' onClick={showFoam} className='fa fa-close'></i>

                <div className="pInputBx">
                    <span>Name</span>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div className="pInputBx">
                    <span>Phone Number</span>
                    <input type="number" name="phone" onChange={handleChange} />
                </div>
                <div className="pInputBx">
                    <span>Pincode</span>
                    <input type="number" name="pincode" onChange={handleChange} />
                </div>
                <div className="pInputBx">
                    <span>Address</span>
                    <input type="text" name="address" onChange={handleChange} />
                </div>
                <div className="pInputBx">
                    <span>Payment Method</span>
                    <select name="payment" onChange={handleChange} >
                        <option value="">--</option>
                        <option value="DC">Debit Cart</option>
                        <option value="CC">Credit Card</option>
                        <option value="COD">Cash On Delivery</option>
                    </select>
                </div>
                
                <div className="pInputBx">
                    <button onClick={handlePlace}>Place Order</button>
                </div>

            </div>
        
        </form>
    </div>
  )
}
