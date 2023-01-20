import Carousel from 'react-bootstrap/Carousel';
import "../styles/homeslider.css"
import { Center } from '@chakra-ui/react'

export default function Homeslider() {
  return (
    <Center>
        <br />
        <Carousel>
        <Carousel.Item>
            <img className="d-block w-80" src="https://cdn.fcglcdn.com/brainbees/banners/hp_dp_mpp_up45_jan_994x3991673241153530.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-80" src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_buy3_soi_desktop1673438839862.webp" alt="Second slide" />
        </Carousel.Item>
        
        <Carousel.Item>
            <img className="d-block w-80" src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_au_17thjan1673891538285.gif" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-80" src="https://cdn.fcglcdn.com/brainbees/banners/giveaway_desktop1673923946732.webp" alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-80" src="https://cdn.fcglcdn.com/brainbees/banners/microsoftteams-image_(10)16675465751681673861976334.webp" alt="" />
        </Carousel.Item>
        
        <Carousel.Item>
            <img className="d-block w-80" src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_gear_17thjan1673888536417.webp" alt="" />
        </Carousel.Item>
        
        </Carousel>
    </Center>
  );
}