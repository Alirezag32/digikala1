import React from "react";
import Slider from "react-slick";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../images/BestSellingProducts/1.webp";
import image2 from "../images/BestSellingProducts/2.webp";
import image3 from "../images/BestSellingProducts/3.webp";
import image4 from "../images/BestSellingProducts/4.webp";
import image5 from "../images/BestSellingProducts/5.webp";
import image6 from "../images/BestSellingProducts/6.webp";
import image7 from "../images/BestSellingProducts/7.webp";
import image8 from "../images/BestSellingProducts/8.webp";
import image9 from "../images/BestSellingProducts/9.webp";
import image10 from "../images/BestSellingProducts/10.webp";
import image11 from "../images/BestSellingProducts/11.webp";
import image12 from "../images/BestSellingProducts/12.webp";
import image13 from "../images/BestSellingProducts/13.webp";
import image14 from "../images/BestSellingProducts/14.webp";
import image15 from "../images/BestSellingProducts/15.webp";
import image16 from "../images/BestSellingProducts/16.webp";
import image17 from "../images/BestSellingProducts/17.webp";
import image18 from "../images/BestSellingProducts/18.webp";
import WhatshotOutlined from "@mui/icons-material/WhatshotOutlined";

const BestSellingProducts = () => {
  const images = [
    { image: image1, titel: "آب معدنی میوا - 1.5 لیتر بسته 6 عددی" },
    {
      image: image2,
      titel: "روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 1800 میلی لیتر",
    },
    { image: image3, titel: "کنسرو ماهی تون در روغن لادن - 180 گرم" },
    { image: image4, titel: "اسپاگتی قطر 1.2 زر ماکارون مقدار 700 گرم" },
    { image: image5, titel: "روغن سرخ کردنی غنچه - 1.5 لیتر" },
    {
      image: image6,
      titel: "پودر ماشین لباسشویی اکتیو مدل Poly Wash مقدار 500 گرم",
    },
    {
      image: image7,
      titel: "نوار دستگاه تست قند خون ایزی گلوکو مدل اتوکدینگ بسته 50 عددی",
    },
    { image: image8, titel: "پنیر فتا دوشه هراز - 400 گرم" },
    { image: image9, titel: "شیر خشک بچه - 1کیلوگرمی" },
    { image: image10, titel: "لازانیا پیش پخت زر ماکارون - 500 گرم" },
    { image: image11, titel: "شیر کم چرب پگاه - 1 لیتر" },
    { image: image12, titel: "پوشک بچه هانیز سایز 4 بسته 34 عددی" },
    { image: image13, titel: "کالباس 90 درصد گوشت مرغ مهيا پروتئين - 250 گرم" },
    { image: image14, titel: "برنج نیم دانه طارم گلستان مقدار 1 کیلوگرم" },
    { image: image15, titel: "لوبیا قرمز همدل - 900 گرم" },
    { image: image16, titel: "پوشک کودک مولفیکس سایز 4 بسته 34 عددی" },
    { image: image17, titel: "پوشک بچه هانیز سایز 5 بسته 28 عددی" },
    { image: image18, titel: "کمپوت آناناس حلقه شده پیک - 565 گرم" },
  ];

  const settings = {
    className: "center",
            
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
  };

          return (
            <>
              <Box sx={{ border: ".5px solid gray", borderRadius: "20px" , marginBottom : "40px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h2 style={{ marginLeft: "20px" }}>پرفروش ترین کالاها</h2>
                  <WhatshotOutlined />
                </Box>
                <Slider {...settings}>
                  {images.map((item, index) => (
                    <React.Fragment key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          cursor: "pointer",
                          direction: "rtl",
                        }}
                      >
                        <CardMedia
                          component="image"
                          image={item.image}
                          alt={`Product ${index + 1}`}
                          sx={{
                            width: "200px",
                            height: "200px",
                          }}
                        />
                        <Grid item xs={12}>
                          <Typography variant="body1" color="#19bfd3">
                            {index + 1}
                          </Typography>
                          <Typography
                    //         sx={{ borderBottom: ".5px solid gray" }}
                            variant="body1"
                          >
                            {item.titel}
                          </Typography>
                        </Grid>
                      </Box>
                    </React.Fragment>
                  ))}
                </Slider>
              </Box>
            </>
          );
};

export default BestSellingProducts;
