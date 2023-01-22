import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../authcontext/AuthContext";
import "../styles/myOrder.css";


function Myorder(){
    const { user } = useContext(AuthContext)
    const [order, setOrder] = useState([])
    const [place, setPlace] = useState([])
    const [loading, setLoading] = useState(false)

    
    const getData = () => {
        return fetch(`https://raspberry-reindeer-cuff.cyclic.app/order`)
        .then((res) => res.json());
    };
    useEffect(() => {
        fetchData();
    }, []);
    
  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await getData();
      setOrder(data);
      setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err);
    }
  };

    return(
        <div className="myorder">
            <h1>My Order</h1>
            <div className="orderGird">
                {order.map((ele) => (
                    ele.items.map((item) => (
                        ele.userId == user.id ? 
                        <div key={item.id} className="box">
                            <img src={item.image} alt="" />
                            <div className="orderData">
                                <h4>{item.desc}</h4>
                                <p>₹ {item.price}</p>
                                <h5>Order will deliver {ele.orderData}</h5>
                                {/* <button>Tract Order</button> */}

                                <br />
                                {ele.status ?  <span>Deliverd</span> : <span>Your package in on the way</span>}
                            </div>
                        </div>
                        : "" 
                    ))
                ))}
            </div>
        </div>
    )
}

export default Myorder