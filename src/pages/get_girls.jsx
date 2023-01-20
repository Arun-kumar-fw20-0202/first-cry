import React, { useEffect, useState } from 'react'
import '../styles/get_girl.css'
import 'font-awesome/css/font-awesome.min.css';
import Load_products from '../components/load_products';

function Get_girls() {

    const [data, setData] = useState([])
    const [newD, setNew] = useState([])
    const [loading, setLoading]= useState(false);

    const getData = () => {
        return fetch(`http://localhost:8080/girls`).then((res) => res.json())
    }
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        setLoading(true)
        try{
            let pro = await getData()
            setData(pro)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
        }
    }

    // Add to cart
    const Addtocart = async (data) => {
        let check = await fetch(`http://localhost:8080/cart`);
        let json = await check.json();

        if(json[0] == undefined) {
            let res = await fetch(`http://localhost:8080/cart`,{
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            alert("Item added to cart")
        }else{
            // Check if item is alredy exist and increment the qty
            if(json[0].id == data.id){
            let qty = json[0].qty
            let id = json[0].id;
            try{
                let send_data = {qty: qty+1}
                const res = await fetch(`http://localhost:8080/cart/${id}`,{
                    method: 'PATCH',
                    body: JSON.stringify(send_data),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                let data2 = await res.json();
                alert("Qty increment")
            }catch(err){
                console.log(err)
            } 
            // Check if item is alredy exist and increment the qty
            }else{
                let res = await fetch(`http://localhost:8080/cart`,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json',
                    }
                })
                alert("Item added to cart")
            }
        }
    }
    // End add to cart

  return (
    <div className="girl_main">
        <div className="filters">
            <span>
                <h2>Price Filter</h2>
                <select>
                    <option value="">₹ 200 - 300</option>
                    <option value="">₹ 300 - 400</option>
                    <option value="">₹ 400 - 500</option>
                    <option value="">₹ 500 - 600</option>
                    <option value="">₹ 600 - 1000 </option>
                </select>
            </span>
            <span>
                <h2>Sort by : Price</h2>
                <select>
                    <option value="">Low to High</option>
                    <option value="">High to Low</option>
                </select>
            </span>
            <span>
                <h2>Sort by : Name</h2>
                <select>
                    <option value="">A to Z</option>
                    <option value="">Z to A</option>
                </select>
            </span>
        </div>

        <div className="products">
            {data.map((ele,i) => (
                <Load_products Addtocart={Addtocart} key={i} image={ele.image} price={ele.price} sprice={ele.sprice} desc={ele.desc} mprice={ele.mprice} id={ele.id} />
            ))}
        </div>
    </div>
  )
}

export default Get_girls