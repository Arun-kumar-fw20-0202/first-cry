import React from 'react'

function LoadcartItems({img, price,desc, id, userId, removeProduct,qty}) {

  return (
    <>
            <div className="box">
                <img src={img} alt="" />
                <div className="data">
                    <h3>{desc}</h3>
                    <span className="price">Rs.{price * qty}</span>
                    {qty > 1 ? <span>Single product price - {Math.floor(price * qty / qty)}</span> : ""}
                    <h3>Qty {qty}</h3>
                    <button onClick={() => removeProduct(id,userId)} >Remove <i style={{color: 'red'}} className='fa fa-close'></i></button>
                </div>
            </div>
    </>
  )
}

export default LoadcartItems