import React, { useContext, useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "../styles/login.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../authcontext/AuthContext';

const user = {
    email: "",
    password: ""
}

export default function  Login() {
    const {LoginUser, isAuth} = useContext(AuthContext)

    const [users, setUsers] = useState([]);
    const [uData, setudata] = useState(user);
    const { email, password } = uData;

    const handleChange = (e) => {
        let val = e.target.value;
        setudata({...uData, [e.target.name] : val})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password)
        let temp = 0;
        let final = {}
        for(let i = 0; i <= users.length-1; i++){
            if(users[i].email === email && users[i].password === password){
                temp = 1;
                final = users[i]
                break
            }
        }
        if(temp == 1){
            // alert("able to login")
            LoginUser(final)
        }else{
            alert("user not found")
        }
    }

    const getData = async () => {
        let res = await fetch(`http://localhost:8080/users`)
        let json = await res.json();
        setUsers(json)
    }
    useEffect(() => {
        getData();
    },[])    

  return (
    <>
        <div id="container1">
            <div className="faff">
                <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" alt="" />
            </div>

                <form id="form" onSubmit={handleSubmit}>
                    <div>Email id</div>
                    <input onChange={handleChange} name="email" type="text" placeholder="Enter Email" value={email} />

                    <div>Password</div>
                    <input onChange={handleChange} type="text" name="password" placeholder="Enter Your Password" value={password} />

                    <h5>Password must be at least 8 characters long with 1 Uppercase, 1 Lowercase & 1 Numeric character.</h5>
                    <button id="btn" type="submit">Continue</button>
                </form>

            <div id="or"></div>
            <div id="fg">
                <div className="facebook">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEu-0_I7ZkmkJk4pjZ5Jy78FN1UKYAafFGg&usqp=CAU" alt="" />
                    <p>FACEBOOK</p>
                </div>
                <div className="facebook">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABTVBMVEX////qQzU0qFNChfT7vAXe6P0vfPMoevP3+f7pOyv7uQD7uADsWU7/vQDqPzDqQTPpOCcmpUo3gPQlpEnpLhrpMyHoKBD8wwA8gvT+9vU3qVUYokJDg/s0qUwQoT786ej1sq7zn5rpODf93Zz/+e7914pftnTt9u/g7+Mzqz+PyZz51tTwg3zrUUXrSTzzpqHxkYvudm78zWX+7MqrxPmu17eh0azS6NdAiuJErV/o9OvtZ173wr/62Nb3x8TwiIL+9OD8yVT94Kb8x0v+6sX95LOkwPn936K4zfoNplfM2/u+3sVNi/STtPh1v4Z3v4c3oX7tZFr6wmDsUijwdCn1lR3803vuZC3yhiP3pBbtVyIMcfP7wzZzofbT4PxeqUHcuB6wszJ5rUTGtSmTsDzauB9pmvZ/qPd6qOs/jdU7l649ksI5nJc2pGxTsmpdPQIaAAALTklEQVR4nO2ca3faVhaGhUJMZGwJGUkx0ACeptjBgCENMNixk3bSTBISGM+lM50mmVunmUuH//9xhCRAd87WuUmsvl+6mrWcoyd7n/3uc7MgsFDj/GnzpN8ZXB10e7lcrtfrHlwNOv2T5tPzRoXJF1BT5bzZv5IMTddLJUmWZUVRTMKc+R/zfySppOuaod92Lm4avL80gSrnFwNJ000wCypaimySatpt/2mGMCs3/a6hl7ax+Th1Te5kgrJxcWvokowO58KUdKPXP+dNEKvrvqKVEtG5KLXODW+OCDVOZE0CZGYsZPoiWWl2ieCtIDX5JFVz8rpj4CVnCGTJuEpNtj490CSyeLZkrdfkzbZUU9YJh28jRdcvePNd6CVisy+UsaSd7DKfw8gtjs0SfT6bsdTkwXfT05nwWYx6l7lBNq40ZnxLycaA7ULrxKBWP6MkaU12fOdKiTVfbpmqB6zanI7BNEE3kg0mVfWmRKWBQZN+S382PuMVQFuy9pQuX6PHYwa6pWgdmoBN9iU0qFKXXsHpaLzpLMkapWVVo8s7Q1dS6NTUcy0FGboSjcnY5FtD/Srdkgbsp2MKbiT1yDrjQOdNFJBcIllSb9NSY9wqHZAD7HLs0yIlkQOs9HYeMEUusRZJwNyuA+56BIXurgMe7HiREQZp9EGSgM/S18mQBbxIWy+6FEnAG4M3TYhIAjbStVyyRRJQyO064BVpn1Csa1CWJEmGXLahA3hCsIwqy1tPhnQweNY/uTB10n82uJWN5Y0pECdRwHNSVWZ5C0gJv7nWuGl2rLtTPAAFMhdH5JLW69/E7jZUbk4O0O5xkAUcEJiESsk4aCJtNFSaV9shyQI28a1e1noXgH0U68IRO8AK9vGuZAzAp9LXHSOakSygcIu5YioZ/UTbYJV+FCNhQMwclYx+4p3MCEbCgHg5KhsdrJ3axiDYLBIGxKqjinaLvU17nvMtSkkD4ni9pBM5oO17wkgaUOglzlFFI3Xl5Tq3ySPigBeJ+1GiJ+yDVbUjDpi8zBA+e3YO84gDCv2kZUZ7RvhLrpe3VskDNhKWGcVokv4UoZGTyQMKnWQhVDQqNwe75AEThlCW6Fz/qJC///Tb3/0iCWAuMw/Qnhfv/x6OKBM+UKepx/v5+3+AImYJ8GExn8/fLwIBlewACt/u5y39ERBGRU/V250tKtqA+ft/QkZUjGveXw3Q504ITcTvUAmN1LxMQlHepSKabehcn7NA9aLoRkSyDWnA+6NB+irvEYJtKDLvbwbpYTHvQyzmtjBmqsq468xG8baRrUnorTPrMMbZhtzl/ckwPfcnqWMb0St+I0tWb+qLkCSNtY1Sn/cnAxXOF20bisT7i4H6MjRJbcRQ26D9coW4opLUQgyxDZn8/gJlRfNZCtgGnX0ZigqvpK4w+mxDvuL9xVB9HZOkNqJ3taFlq5sRAj1pmPZdtiETf81BXVuS1A7jxjZoPayipxivcCOubEPp8f5gsMK67jBExzb4PP/HEsI0dGTZhsb7e+FCC6EVRtM2JKqvVKlomxt6EL/L6Vlze0H4Bj2Gpvb/zPt74YprSkP0Le/vhetXIMDil7y/Fy5YCIu4w91lptWIgV22eD3GBLz3/R4rrYZE62hW2v8al7Bwh5EK95whYaW0+DwzhHurNIWV0n1MQIaER2+cIR+DCHGnIUvCJ86Q70Eh/DxDhO+cIWHT8EV2CI8/OEOCSmnxYXYI77y1R4TZIbbfsyQ8skeErCzy+fdZIizYI8IMH7uUsiTcsy3/BaTS7H+RKULb8kEtzf6vM0X40Rpx626wh/CbLBE6TQ3iRpstfDtkGsNXCQjxl78sY2gTghpv7JUFW8InO0/48mfCnwlTT2gvn3a5liYhzJQfOoS73NPY83CH+1KHcIfXFg4haH24n6n1odPT7PAa3+lLYfs02BvCHAh3eK9tz9n0hu2XYls++zU+cM8b2y7Y79PAzi3wiynL3UTneA14jJ8lQmdI4PkhbqlhSHjsDAk8A8btTBmezDjnFlBDxD7HZ3/2BLyLgev5HM4PGd+n4XAGDD3Ix7wTxeEcH1ZMD/N/yQrh+i4GaHVx+FexNsYj/L6QXEcQwsJmUPQYHv7ttajOsQix9ASEuPk51DvCh4d/fy2KYo0f4YdjdL6NWSBvtx2+r4pLlYfcCPcAEXT2MCyhdTWH/3gt2qryArwLInzj+kkEwsPDH1aAuLUmuUDTcFNKBZSJaJrEGlAUW5wIfwRMw9VdE1tbd4UP/ym6xSmIICs9/tH9o9sccWkSHvEJIihJ3YVG2PL+0DEJ/kF8C0nSvTeen41rTc02JqgFB8C7oH5vfUPYVoxfbEzCE8Qpe8J3kBCuru2tFZ2hP4QBiqLKHBDWsm8Wh44i0tRrEh7CNmvCl6Ce1DcNo6qpzyQ8qp8xJoT0M56FhaNQQL9JeDRhCwgLodcNLQW77xCT8Kg8YgkIXDhvdjDWCuy4hZqEN09ZmuInUCG9U7gb/Ct8vWm4SfjEDvAjcO/D7xVLeX5PVKRJeKSya97ewgB9LZsjJJPwqsZqKr4DlZnwJHXXmjiT8KrOprWB5mhokgqbdXC8SfgQWbjiPWAEwyqpJfv3Jm4zCZ/Kp/QJQQvfpXxd91qWYWw3Cb+oI36ChjDE7h093kczCa9o70u9hLVrdzZ3MIJ6XkQyCZ9Uuoiv4KcAR9F/22M0kwhEkWKiJgH0L5xcOqsnATTDeJkiwMg6Y2mmJkOktW+TBNC9mx/UacIginUqO/3vkpzEFT7G/p3thEEUaxROpD6Aq+idOKtwVEtIKJYnhOvNvbdQH7QU2L7wa1ROikh4/+3VHrSTsUMY0ZK6VE1MKNZmxPge/ivhYfjWEArCOHGemq5RI1Rwpqr6788ohTC5Y9hhXBBYbFy2zH/lR/9JgogQQtMxMIJoqj7HrDinbduyHv3mGDwTtxZSW0M8RLXexmA8bddWOfRg8ktoGMPX9kG1sAhxGC83fEs9+i8M8fgT6r8jXhAtxlmCPm7aqvtqwKOfQIixHalHmHlqMdaqI1Agz9pqyKgP/gc4NIzavAhTC6eeriHriyHiomPcFmvhQz54gGwbSE6xFglCU+VatT3dEsrxqFWLwLOEbBuoZcYZNukiIyC1XBNno2mYTZ5NR/NJPY7ORkSzjbiFb5hG+FPRRWli1tXFbN4eWWq3561JuVYrq0i5gmgbMEBCU9EPuhHsJxFsA5ajlogD4mirbYSfVMTrkthUJKEttoHYrvk0TRdirG3sIXu9R0SrDb5ibKOAsqQI0zz5gp+GIm0DahQuUSioOHpQDbWNo0ST0NEiXYihtgHr1gKapA0xaBtHyarMWhg7U1QUsI0EVu/VaeoQvbaRuIy6EVOWqB7bKESeFUKUPsS1bRQAi944pa3crG2jkKAbDdciXdYvOrZBDlAQZulD/OkzUilqq52uHlVc2gaRIrPRMFUrDZHGfSycIxsKonGwfpqikqpSuv8xS0sYy9TufaZkMtYpPhS4TEN/Q/k5y5x3GIlfiQhoDN3sJCuaGboWxzCqIpsHAmORUxNXZ/dSvs0jjOUqyxce1n0JplKZvQxYaVplmqr1GYMb5X4NVWaMtQWnF/KjMhPG2oTDk1WGjLUqR76l6OaqyjV+K00nW8/ik/LVW7x+Q4VP43mdQiDL5Ta1K/IJNCQcyHK9lYL09Oos8tpPArzJkIP9ISj6bhO61HJ9MUpTdvp1NlrUy0kp1XKtPN92iSoNGreXV52AmCadOhuyfuWPofFopi5vPSGxlWu1Vnua5tSM0Ol42G6pdRO0HLwGZf7JkqwuttrDcQbh3LocT4ej9nzWWkyqVVGsVieLVmvebo+G0zHtOfd/FjbfLjzFQ/AAAAAASUVORK5CYII=" alt="" />
                    <p>GOOGLE</p>
                </div>
            </div>

            <div className="new"><a>New to firstCry? <Link to="/register"> Register Here</Link></a></div>
            <hr />
            <p className="policy">
                By Continuing you agree to firstcry's 
                <span>
                    <Link>conditions of use and </Link>
                </span>
                <span>
                    <Link>Privacy Notice</Link>
                </span>
            </p>
        </div>
    </>
  )
}
