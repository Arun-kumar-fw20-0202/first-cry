import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Girls_cloths() {
    const [index, setIndex] = useState(0);
    
    // for(let i = 0; i <= 10; i++){
    //     console.log(i,"❣️")
    // }

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

return (
    <>
        <div className="boys_main">
            <Carousel activeIndex={index} onSelect={handleSelect}>

                <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_girl_2_4y_category_wedding22_211122.jpg" alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_new_arrivals_girl_2to4y_261022.jpg" alt="Second slide"/>
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_sweaters_girl_2to4y_261022.jpg" alt="Third slide" />
                </Carousel.Item>
                
                <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_sweatshirts_jackets_girl_2to4y_261022.jpg" alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_winter_essentials_girl_2to4y_261022.jpg" alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_frocks_dresses_girl_2to4y_06102022.jpg" alt="Third slide" />
                </Carousel.Item>

            </Carousel>

            <div className="box">
                <br />
                <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_01.jpg" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/girl_2_4y_wedding_fashion_02.jpg" alt="" /></Link>
                <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/girl_2_4y_wedding_fashion_03.jpg" alt="" /></Link>
                <Link to="/girls_products"><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/girl_2_4y_wedding_fashion_04.jpg" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://i.ibb.co/b7scZLc/image.png" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://i.ibb.co/MksLf7p/image.png" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://i.ibb.co/s1Ht6kF/image.png" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://i.ibb.co/f0JrHbS/image.png" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://i.ibb.co/rw85F4N/image.png" alt="" /></Link>
                <br />
                <Link to="/girls_products"><img src="https://i.ibb.co/kMsx75W/image.png" alt="" /></Link>

            </div>
        </div>
    </>
  );
}

export default Girls_cloths