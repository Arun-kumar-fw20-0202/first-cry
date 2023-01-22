import { Link } from "react-router-dom"
import "../styles/premium.css"
export default function Homepremium(){
    let products = [
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28855.webp" , navigate: "/girls_products" , text: "The cozy Corner | 2 - 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28856.webp" , navigate: "/boys_products" , text: "Fill Up Your Catts With Carter's I Up To 2..."},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28857.webp" , navigate: "/boys_products" , text: "Stay Fit, Stay Strong | 4 - 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28860.webp" , navigate: "/girls_products" , text: "All-Time Fun"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28859.webp" , navigate: "/girls_products" , text: "The Lounge Story I Up To 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28858.webp" , navigate: "/girls_products" , text: "Step Up The Fashion Game I Up To 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28851.webp" , navigate: "/boys_products" , text: "All That's stylish I Up To 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28850.webp" , navigate: "/boys_products" , text: "Hello Discounts I Up To 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28849.webp" , navigate: "/girls_products" , text: "Gracefully Dressed! I Up To 12+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28848.webp" , navigate: "/boys_products" , text: "Organic Collection I Up To 8+Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28853.webp" , navigate: "/girls_products" , text: "O For organic I Up To 12Y"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28852.webp" , navigate: "/girls_products" , text: "Chill Vibes I Up To 12+Y"},
    ]
    let brands = [
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_28.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_29.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_37.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/wingsfield_26_09_2022.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_40.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_41.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_42.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_43.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_44.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_new_desktop_spring_12052022_45.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_46_EARTHY_TOUCH.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_47.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111112052022_48.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_new_12052022_49.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_50.jpg"}
    ]
    let kid_food = [
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_03.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_04.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_05.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_06.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_07.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_08.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_11.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_12.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_13.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_14.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_15.jpg"},
        {img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_17.jpg"},
    ]
    
    return(
        <>
            <div className="main">
                <h1>PREMIUM BOUTIQUES</h1>
                <div className="box">
                    {products.map((ele,i) => (
                        <div key={i} className="card">
                            <Link to={`${ele.navigate}`}>
                                <img src={ele.img} alt="" />
                            </Link>
                            <div className="text">
                                <h3>{ele.text}</h3>
                                <span>New Today</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* GLORIOUS SHADES OF COLORS */}
                <div className="box2">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_SOI_2023_05.jpg" alt="" />
                    <div className="cards">
                        <Link to="/boys_products"> <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_05.jpg" alt="" /></Link>
                        <Link to="/girls_products"> <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_06.jpg" alt="" /></Link>
                        <Link to="/boys_products"> <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_07.jpg" alt="" /></Link>
                        <Link to="/girls_products"> <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_08.jpg" alt="" /></Link>
                    </div>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_188_desktop_SOI_2023_10.jpg" alt="" />
                </div>
                {/* (0-6 6-24 2-4 4-6 like) */}
                <div className="dates">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_10.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_11.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_12.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_13.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_14.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_15.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_16.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_17_12plus.jpg" alt="" />
                </div>
                {/* JOIN THE STYLE PARADE */}
                <div className="box3">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_220_desktop_SOI_2023_17.jpg" alt="" />
                    <div className="circle">
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_18.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_19.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_20.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_21.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_22.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_23.jpg" alt="" />
                    </div>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_228_desktop_SOI_2023_18.jpg" alt="" />
                </div>
                {/* Beloved Brands */}
                <div className="box4">
                    {brands.map((ele,i) => (
                        <img key={i} src={ele.img} alt="" />
                    ))}
                </div>
                {/*  */}
                <div className="box5">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_213_desktop_SOI_2023_24.jpg" alt="" />
                    <div className="items">
                        <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_25.jpg" alt="" /></Link>
                        <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_26.jpg" alt="" /></Link>
                        <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_27.jpg" alt="" /></Link>
                    </div>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_01.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_02.jpg" alt="" />
                </div>
                {/*  */}
                <div className="box6">
                    <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_11.jpg" alt="" /></Link>
                    <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_12.jpg" alt="" /></Link>
                    <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_13.jpg" alt="" /></Link>
                    <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_14.jpg" alt="" /></Link>
                    <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_14.jpg" alt="" /></Link>
                    <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_16.jpg" alt="" /></Link>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_17.jpg" alt="" />
                </div>
                {/*  */}
                <div className="box3">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_01.jpg" alt="" />
                    <div className="circle">
                        {kid_food.map((ele,i)=> (
                            <img key={i} src={ele.img} alt="" />
                        ))}
                    </div>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_01.jpg" alt="" />
                    <div className="circle">
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_02.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_02.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_04.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_05.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_06.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_06.jpg" alt="" />
                    </div>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_40.jpg" alt="" />
                </div>

                {/*  */}
                <div className="box6">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_42.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_43.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_44.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_45.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_46.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_47.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_48.jpg" alt="" />
                </div>
                {/*  */}
                <div className="box3">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_18.jpg" alt="" />
                    <div className="circle">
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_19.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_20.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_21.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_22.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_23.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_24.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_25.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_26.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_27.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_28.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_29.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_30.jpg" alt="" />
                    </div>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_96.jpg" alt="" />
                    <div className="circle">
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_97.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_98.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_99.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_100.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_101.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_102.jpg" alt="" />
                    </div>
                </div>
                {/*  */}
                <div className="imgBx">
                    <img src="https://i.ibb.co/mRMtdy2/image.png" alt="" />
                    <img src="https://i.ibb.co/BCwsyDG/image.png" alt="" />
                </div>
                {/*  */}
                <div className="box7">
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_31.jpg" alt="" />
                    <div className="circle">
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_32.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_33.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_34.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_35.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_36.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_37.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_38.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_39.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_40.jpg" alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_41.jpg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
