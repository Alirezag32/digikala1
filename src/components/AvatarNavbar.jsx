import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Container , Box, Typography } from "@mui/material";

import image1 from "../images/HeaderAvatarImages/1.jpg";
import image2 from "../images/HeaderAvatarImages/2.jpg";
import image3 from "../images/HeaderAvatarImages/3.jpg";
import image4 from "../images/HeaderAvatarImages/4.jpg";
import image5 from "../images/HeaderAvatarImages/5.jpg";
import image6 from "../images/HeaderAvatarImages/6.jpg";
import image7 from "../images/HeaderAvatarImages/7.jpg";
import image8 from "../images/HeaderAvatarImages/8.jpg";
import image9 from "../images/HeaderAvatarImages/9.jpg";
import image10 from "../images/HeaderAvatarImages/10.jpg";
import image11 from "../images/HeaderAvatarImages/11.jpg";
import image12 from "../images/HeaderAvatarImages/12.jpg";
import image13 from "../images/HeaderAvatarImages/13.jpg";
import image14 from "../images/HeaderAvatarImages/14.jpg";
import image15 from "../images/HeaderAvatarImages/15.jpg";
import image16 from "../images/HeaderAvatarImages/16.jpg";
const Images = [
  { image: image1, title: "فروشگاه 1" },
  { image: image2, title: "فروشگاه 2" },
  { image: image3, title: "فروشگاه 3" },
  { image: image4, title: "فروشگاه 4" },
  { image: image5, title: "فروشگاه 5" },
  { image: image6, title: "فروشگاه 6" },
  { image: image7, title: "فروشگاه 7" },
  { image: image8, title: "فروشگاه 8" },
  { image: image9, title: "فروشگاه 9" },
  { image: image10, title: "فروشگاه 10" },
  { image: image11, title: "فروشگاه 11" },
  { image: image12, title: "فروشگاه 12" },
  { image: image13, title: "فروشگاه 13" },
  { image: image14, title: "فروشگاه 14" },
  { image: image15, title: "فروشگاه 15" },
  { image: image16, title: "فروشگاه 16" },
];
const AvatarImageSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 2,
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
            <Container>
              <Slider {...settings}>
                {Images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: 100,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection : "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{ width: 60, height: 60, margin: "0 auto"  , border : "2px solid"}}
                      src={image.image}
                      alt={image.title}
                    />
                    <Box sx={{textAlign : "center"}}>{image.title}</Box>
                  </Box>
                ))}
              </Slider>
            </Container>
          );
};

export default AvatarImageSlider;
