import { Container  , Box , CardMedia} from "@mui/material";

import Slider from "react-slick";
import image1 from "../images/HeaderSliderImages/1.gif"
import image2 from "../images/HeaderSliderImages/2.webp"
import image3 from "../images/HeaderSliderImages/3.gif"
import image4 from "../images/HeaderSliderImages/4.webp"
import image5 from "../images/HeaderSliderImages/5.webp"
import image6 from "../images/HeaderSliderImages/6.webp"
import image7 from "../images/HeaderSliderImages/7.webp"
import image8 from "../images/HeaderSliderImages/8.webp"
import image9 from "../images/HeaderSliderImages/9.webp"
import image10 from "../images/HeaderSliderImages/10.gif"


const images = [
  { src: image1, title: "Image 1" },
  { src: image2, title: "Image 2" },
  { src: image3, title: "Image 3" },
  { src: image4, title: "Image 4" },
  { src: image5, title: "Image 5" },
  { src: image6, title: "Image 6" },
  { src: image7, title: "Image 7" },
  { src: image8, title: "Image 8" },
  { src: image9, title: "Image 9" },
  
];


const HeaderSlider = () => {
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplaySpeed : 10000,
          };
          return (
            
              <Slider {...settings}>
                {images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      width :80,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="100px"
                      image={image.src}
                      alt={image.title}
                    />
                  </Box>
                ))}
              </Slider>
            
          );
}
 
export default HeaderSlider;