import React, { useContext, useEffect, useState } from 'react'
import '../styles/get_girl.css'
import 'font-awesome/css/font-awesome.min.css';
import Load_products from '../components/load_products';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Get_boys() {
    const [data, setData] = useState([])
    const [cartItem, setCartitem] = useState([])
    const [loading, setLoading]= useState(false);
    const [sort, setSort]= useState("")
    // Sweet alert
    const notify = () => toast.warn("Please Login First!");
    const addTocart = () => toast.success("Item Add To Cart")
    // Sweet alert

    // let newArr= [];
    // for(let i = 0; i <= data.length-1; i++){
    //     let ele = data[i];
    //     let obj = {
    //         img: ele.image_url,
    //         price: ele.price,
    //         desc: ele.brand_description,
    //         sprice: ele.striked_off_price,
    //         mprice: ele.member_price,
    //         id: i
    //     }
    //     newArr.push(obj)
    // }
    // console.log(newArr)
    

    // 
        
        const getData = () => {
            return fetch(`https://raspberry-reindeer-cuff.cyclic.app/boys`).then((res) => res.json())
        }
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
   
    useEffect(() => {
        fetchData();
    },[sort])


    // Add to cart
    const Addtocart = async (data) => {
      if(cartItem.length <= 0){
            let res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/cart`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                    'Content-Type': 'application/json',
                }
            })
            setCartitem([...cartItem,data])
        }else{
            let res = await fetch(`https://raspberry-reindeer-cuff.cyclic.app/cart`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                    'Content-Type': 'application/json',
                }
            })
            setCartitem([...cartItem,data])
        }
        // Sweet alert
        addTocart()
        // Sweet alert
    }

    // If user is not login
    const handleCheck = () => {
        notify()
    }
    // End add to cart


    // {/* filters */}
    
    let Fdata = null; 
    const handleChange = (e) => {
        if(e.target.value == "htl"){
            setSort("highToLow")
        }else if (e.target.value == "lth"){
            setSort("lowToHigh")
        }else if(e.target.value == "AtoZ"){
            setSort("asse");
        }else if(e.target.value == "ZtoA"){
            setSort("desc");
        }
        else if(e.target.value == "200-300"){
            setSort("200-300");
        }else if(e.target.value == "300-400"){
            setSort("300-400");
        }else if(e.target.value == "400-500"){
            setSort("400-500");
        }else if(e.target.value == "500-600"){
            setSort("500-600");
        }else if(e.target.value == "600above"){
            setSort("600above");
        }else if(e.target.value == "all"){
            setSort("all");
        }
    }

    if(sort == "highToLow"){
        data.sort((a, b) => {
            return a.price > b.price ? -1 : 1;
        });

    }else if(sort == "lowToHigh"){
        data.sort((a, b) => {
            return b.price > a.price ? -1 : 1;
        });
    }else if(sort == "asse"){
        data.sort(function(a,b){
            if(a.desc < b.desc)  return -1
            if(b.desc > a.desc)  return 1
            return 0
        })
    }else if(sort == "desc"){
        data.sort(function(a,b){
            if(a.desc > b.desc)  return 1
            if(b.desc < a.desc)  return -1
            return 0
        })
    }else if(sort == "all"){
        Fdata = null
    }else if(sort == "200-300"){
        let filt = data.filter(function(ele) {
            return ele.price >= 200 && ele.price <=300; 
        })
        Fdata = filt
    }else if(sort == "300-400"){
        let filt = data.filter(function(ele) {
            return ele.price >= 300 && ele.price <= 400; 
        })
        Fdata = filt
    }else if(sort == "400-500"){
        let filt = data.filter(function(ele) {
            return ele.price >= 400 && ele.price <= 500; 
        })
        Fdata = filt
    }else if(sort == "500-600"){
        let filt = data.filter(function(ele) {
            return ele.price >= 500 && ele.price <= 600; 
        })
        Fdata = filt
    }else if(sort == "600above"){
        let filt = data.filter(function(ele) {
            return ele.price >= 600;
        })
        Fdata = filt
    }



    const handleWishlist = (id) => {
        alert(id)
        this.hide()
    }

  return (
    <div className="girl_main">
        {/* Sweetalert Box */}
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover  theme="dark" />
        {/* Sweetalert Box */}

        <div className="filters">
            <span>
                <h2>Price Filter</h2>
                <select onChange={handleChange}>
                    <option value="all">Filter Price</option>
                    <option value="200-300">₹ 200 - 300</option>
                    <option value="300-400">₹ 300 - 400</option>
                    <option value="400-500">₹ 400 - 500</option>
                    <option value="500-600">₹ 500 - 600</option>
                    <option value="600above">₹ 600 - 1000 </option>
                </select>
            </span>
            <span>
                <h2>Sort by : Price</h2>
                <select onChange={handleChange}>
                    <option>Sort By Price</option>
                    <option value="lth">Low to High</option>
                    <option value="htl">High to Low</option>
                </select>
            </span>
            <span>
                <h2>Sort by : Name</h2>
                <select onChange={handleChange}>
                    <option>Assending Or Dessending</option>
                    <option value="AtoZ">A to Z</option>
                    <option value="ZtoA">Z to A</option>
                </select>
            </span>
        </div>

        <div className="products">
            {Fdata != null ? loading ? <h1>Loading</h1> : Fdata.map((ele,i) => (
                    <Load_products handleCheck={handleCheck} handleWishlist={handleWishlist} Addtocart={Addtocart} key={i} image={ele.image} price={ele.price} sprice={ele.sprice} desc={ele.desc} mprice={ele.mprice} id={ele.id} />
            )) : 
            loading ? <h1>Loading</h1> : data.map((ele,i) => (
                <Load_products handleCheck={handleCheck} handleWishlist={handleWishlist} Addtocart={Addtocart} key={i} image={ele.image} price={ele.price} sprice={ele.sprice} desc={ele.desc} mprice={ele.mprice} id={i} />
            ))}

        </div>
    </div>
  )
}

export default Get_boys