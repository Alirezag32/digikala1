import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import image1 from "../images/Reading/1.jpg";
import image2 from "../images/Reading/2.jpg";
import image3 from "../images/Reading/3.jpg";
import image4 from "../images/Reading/4.jpg";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

const imageDataArray = [
  {
    image: image1,
    title: "بررسی شومیز آستین بلند زنانه مدل D100؛ زیبا، خوش فرم و چشم‌نواز",
  },
  {
    image: image2,
    title: "محبوب‌ترین لوازم جانبی ردمی ۱۳C شیائومی در دیجی‌کالا",
  },
  {
    image: image3,
    title: "بررسی ساعت مچی عقربه ای مردانه کاسیو؛ زیبا، اقتصادی و باکیفیت",
  },
  {
    image: image4,
    title:
      "راهنمای خرید بهترین لپ تاپ اچ‌پی تا ۵۰ میلیون تومان؛ ۱۰ محصول حرفه‌ای‌پسند",
  },
];

const MainReading = () => {
          return (
            <>
              <Grid container spacing={3} alignItems="center" justifyContent="space-evenly">
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#19bfd3",
                      position: "relative",
                                                                      left: "20px",
                      cursor : "pointer"
                    }}
                  >
                    <ArrowBackIosNew />
                    <Typography variant="body1">
                      مطالب بیشتر در دیجیکالا مگ
                    </Typography>
                  </Box>
                                        </Grid>
                                        
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="h4">خواندنی ها</Typography>
                  </Box>
                </Grid>

                
              </Grid>
              <Grid container spacing={3}>
                {imageDataArray.map((item, index) => (
                  <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="300"
                        width="300"
                        image={item.image}
                        alt={`Image ${index + 1}`}
                      />
                      <CardContent sx={{ flexGrow: 1, direction: "rtl" }}>
                        <Typography gutterBottom variant="p" component="div">
                          {item.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          );
};

export default MainReading;
