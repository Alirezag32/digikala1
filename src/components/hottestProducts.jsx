import React from "react";
import Slider from "react-slick";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../images/HottestProducts/1.webp';
import image2 from "../images/HottestProducts/2.webp";
import image3 from "../images/HottestProducts/3.webp";
import image4 from "../images/HottestProducts/4.webp";
import image5 from "../images/HottestProducts/5.webp";
import image6 from "../images/HottestProducts/6.webp";
import image7 from "../images/HottestProducts/7.webp";
import image8 from "../images/HottestProducts/8.webp";
import image9 from "../images/HottestProducts/9.webp";
import image10 from "../images/HottestProducts/10.webp";
import image11 from "../images/HottestProducts/11.webp";
import image12 from "../images/HottestProducts/12.webp";
import image13 from "../images/HottestProducts/13.webp";
import image14 from "../images/HottestProducts/14.webp";
import image15 from "../images/HottestProducts/15.webp";
import image16 from "../images/HottestProducts/16.webp";
import image17 from "../images/HottestProducts/17.webp";
import image18 from "../images/HottestProducts/18.webp";
import WhatshotOutlined from "@mui/icons-material/WhatshotOutlined";

const HottestProducts = () => {
  const images = [
    {
      image: image1,
      titel:
        "گوشی موبایل سامسونگ مدل Galaxy A24 4G دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
    },
    {
      image: image2,
      titel: "گوشی موبایل ریلمی مدل Note 50 ظرفیت 128 گیگابایت و رم 4 گیگابایت",
    },
    {
      image: image3,
      titel:
        "تلویزیون کیو ال ای دی هوشمند جی پلاس مدل GTV-50RQ754N سایز 50 اینچ",
    },
    {
      image: image4,
      titel: "تلویزیون ال ای دی هوشمند نکسار مدل NTV-H43E614N سایز 43 اینچ",
    },
    { image: image5, titel: "کیبورد تسکو مدل TK 8032 با حروف فارسی" },
    {
      image: image6,
      titel: "ساعت مچی عقربه ای زنانه لاروس مدل 0417-79244G",
    },
    {
      image: image7,
      titel: "ادکلن مردانه مولکول ویورک مدل شنل بلو د شنل حجم 200 میلی لیتر",
    },
    { image: image8, titel: "هندزفری بلوتوثی تی سی اچ مدل TCH S33 ENC+ANC" },
    {
      image: image9,
      titel:
        "گوشی موبایل موتورولا مدل Moto G54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
    },
    { image: image10, titel: "کاپوچینو جاموکا - 25 گرم بسته 10 عددی" },
    { image: image11, titel: "  لوستر ام کی ای لایتینگ مدل مدرن کد Ringo-w60" },
    { image: image12, titel: "اسپیکر بلوتوثی تسکو مدل TS 2316" },
    { image: image13, titel: " سرویس پذیرایی 6 پارچه گلاسکو مدل نوبلیس" },
    {
      image: image14,
      titel: "لامپ 8 وات اس ام دی سایروکس مدل حبابی پایه E27 بسته دو عددی",
    },
    {
      image: image15,
      titel: "گاز کولر انتخاب سرویس مدل R134a وزن 13.6 کیلوگرم",
    },
    { image: image16, titel: "کوله پشتی فوروارد کد 6006blk به همراه جامدادی" },
    { image: image17, titel: "کافی میکس 3 در 1 جاموکا - 18 گرم بسته 16 عددی" },
    {
      image: image18,
      titel: "لامپ هوشمند ال ای دی داشبورد خودرو آی لد مدل DB1033",
    },
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
      <Box
        sx={{
          border: ".5px solid gray",
          borderRadius: "20px",
                                          marginBottom: "40px",
          marginTop : "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>داغ ترین چند روز گذشته</h2>
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
                  marginLeft: "30px"
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
                  <Typography variant="h4" color="#19bfd3">
                    {index + 1}
                  </Typography>
                  <Typography
                                                            //         sx={{ borderBottom: ".5px solid gray" }}
                                                            sx={{marginRight : "20px"}}
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

export default HottestProducts;
