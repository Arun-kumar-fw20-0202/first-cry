import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Load_products(props) {
    const {Addtocart,image,price,desc,sprice,mprice,id} =  props

    let newData = {
        image,price,desc,sprice,mprice,id,qty:1
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
                        <button onClick={() => Addtocart(newData)}><i className='fa fa-shopping-bag'></i> Add to cart</button>
                        <button><i className='fa fa-heart-o'></i> Wishlist</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Load_products