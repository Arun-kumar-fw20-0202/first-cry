import "../styles/boys_cloths.css"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Boys_cloths() {
    const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

  return (
    <>
    <div className="boys_main">
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/mobile_cat_new_arrivals_boy_2to4_011122.jpg" alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/mobile_cat_sweatshirts_jackets_boy_2to4y.jpg" alt="Second slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_winte_essentials_boy_2to4y_061022.jpg" alt="Third slide" />
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/B-_Firstcry-Work_Rohan-Narkar_Work_Category-Banner_Heavy-Winter-cat-banners_Desktop-banner_boy_desktop_cat_nightwear_boy_2to4y_261022.jpg" alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_app_6_24m_boy_warmest_wintry_welcomes_02112022.jpg" alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_boy_2_4y_category_wedding22_211122.jpg" alt="Third slide" />
      </Carousel.Item>

    </Carousel>

        <div className="box">
            <br />
            <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_01.jpg" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_02.jpg" alt="" /></Link>
            <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_03.jpg" alt="" /></Link>
            <Link to="/boys_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_04.jpg" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://i.ibb.co/31CjHDW/image.png" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://i.ibb.co/wsP9HGb/image.png" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://i.ibb.co/d0VtF38/image.png" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://i.ibb.co/mzQr4NT/image.png" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://i.ibb.co/tPgD47P/image.png" alt="" /></Link>
            <br />
            <Link to="/boys_products"><img src="https://i.ibb.co/kG5fxYz/image.png" alt="" /></Link>

        </div>
    </div>
    </>
  )
}

export default Boys_cloths