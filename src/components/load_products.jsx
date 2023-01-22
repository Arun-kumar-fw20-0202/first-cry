import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../authcontext/AuthContext';

function Load_products(props) {
    const { isAuth , user} = useContext(AuthContext)
    const {handleCheck,Addtocart,handleWishlist,image,price,desc,sprice,mprice,id,newId} =  props;

    let newData = {}
    if(isAuth){
        newData = {
            image,
            price,
            desc,
            sprice,
            mprice,
            id:newId,
            qty:1, 
            userId: user.id,
            proId: id
        }
    }

  return (
    <>
            <div className="box">
                <Link to={`${id}`}>
                    <img src={image} alt="" />
                </Link>
                <div className="details">
                    <p>{desc}</p>
                    <p>Get it by <b>Tomorrow</b></p>
                    <p>
                        <span>₹ {price}</span>
                        <span><del>₹ {sprice}</del></span>
                        <span>( 50% off )</span>
                    </p>
                    <div className="btnBx">
                        {isAuth ?  <button onClick={() => Addtocart(newData)}><i className='fa fa-shopping-bag'></i> Add to cart</button> :
                         <button onClick={handleCheck}><i className='fa fa-shopping-bag'></i> Add to cart</button> }
                       
                        <button onClick={() => handleWishlist(id)}><i className='fa fa-heart-o'></i> Wishlist</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Load_products