import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import image1 from "../images/ShopByCategory/1.png";
import image2 from "../images/ShopByCategory/2.png";
import image3 from "../images/ShopByCategory/3.png";
import image4 from "../images/ShopByCategory/4.png";
import image5 from "../images/ShopByCategory/5.png";
import image6 from "../images/ShopByCategory/6.png";
import image7 from "../images/ShopByCategory/7.png";
import image8 from "../images/ShopByCategory/8.png";
import image9 from "../images/ShopByCategory/9.png";
import image10 from "../images/ShopByCategory/10.png";
import image11 from "../images/ShopByCategory/11.png";
import image12 from "../images/ShopByCategory/12.png";

const ShopByCategory = () => {
  const images = [
    { image: image1, title: "موبایل" },
    { image: image2, title: "کالای دیجیتال " },
    { image: image3, title: "خانه و آشپز خانه" },
    { image: image4, title: "لوازم خانگی برقی" },
    { image: image5, title: "مد و پوشاک" },
    { image: image6, title: "ساعت, طلا و جواهرات" },
    { image: image7, title: "کالا های سوپرمارکتی" },
    { image: image8, title: "کتاب, لوازم و تحریر و هنر" },
    { image: image9, title: "اسباب و بازی , کودک و نوزاد" },
    { image: image10, title: "ابزار آلات و تجهیزات" },
    { image: image11, title: "خودرو و موتور سیکلت" },
    { image: image12, title: "ورزش و سفر" },
  ];

  return (
    <>
      <Box sx={{marginBottom : "30px"}}>
        <h2 style={{ textAlign: "center" }}>خرید بر اساس دسته بندی</h2>
        <Grid container spacing={2}>
          {images.map((box, index) => (
            <Grid
              key={index}
              item
              lg={2}
              xs={3}
              container
              flexDirection="column"
              alignItems="center"
            >
              <CardMedia
                image={box.image}
                component="image"
                sx={{ width: "95px", height: "95px" }}
              />
              <Box>{box.title}</Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ShopByCategory;
