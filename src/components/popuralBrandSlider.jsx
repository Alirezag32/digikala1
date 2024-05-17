import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Container, Box, Typography, CardMedia } from "@mui/material";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import image1 from "../images/PopularBrandSlider/1.png";
import image2 from "../images/PopularBrandSlider/2.png";
import image3 from "../images/PopularBrandSlider/3.png";
import image4 from "../images/PopularBrandSlider/4.png";
import image5 from "../images/PopularBrandSlider/5.png";
import image6 from "../images/PopularBrandSlider/6.png";
import image7 from "../images/PopularBrandSlider/7.jpg";
import image8 from "../images/PopularBrandSlider/8.jpg";
import image9 from "../images/PopularBrandSlider/9.png";
import image10 from "../images/PopularBrandSlider/10.png";
import image11 from "../images/PopularBrandSlider/11.jpg";
import image12 from "../images/PopularBrandSlider/12.png";
import image13 from "../images/PopularBrandSlider/13.png";
import image14 from "../images/PopularBrandSlider/14.jpg";
import image15 from "../images/PopularBrandSlider/15.png";
import image16 from "../images/PopularBrandSlider/16.jpg";
import image17 from "../images/PopularBrandSlider/17.png";
import image18 from "../images/PopularBrandSlider/18.png";
import image19 from "../images/PopularBrandSlider/19.jpg";
import image20 from "../images/PopularBrandSlider/20.png";
import image21 from "../images/PopularBrandSlider/21.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

const PopularBrandSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
            slidesToScroll: 2,
    rtl : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ marginTop: "30px", borderRadius : "30px" , marginBottom  :"40px" }}>
      <Box sx={{display  :"flex" , justifyContent : "center" , alignItems : "center"}}>
        <h2 style={{ textAlign: "center" }}>محبوب ترین برند ها</h2>
        <StarPurple500Icon />
      </Box>

      <Slider {...settings}>
        {images.map((image, index) => (
          <Box sx={{cursor  :"pointer"}}>
            <CardMedia
              sx={{ width: " 100px", height: "100px" }}
              key={index}
              component="image"
              image={image}
            />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PopularBrandSlider;
