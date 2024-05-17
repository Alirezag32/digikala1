import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import image1 from "../images/selectedOfferProduct/1.webp";
import image2 from "../images/selectedOfferProduct/2.webp";
import image3 from "../images/selectedOfferProduct/3.webp";
import image4 from "../images/selectedOfferProduct/4.webp";
import image5 from "../images/selectedOfferProduct/5.webp";
import image6 from "../images/selectedOfferProduct/6.webp";
import image7 from "../images/selectedOfferProduct/7.webp";
import image8 from "../images/selectedOfferProduct/8.webp";
import image9 from "../images/selectedOfferProduct/9.webp";
import image10 from "../images/selectedOfferProduct/10.webp";
import image11 from "../images/selectedOfferProduct/11.webp";
import image12 from "../images/selectedOfferProduct/12.webp";
import image13 from "../images/selectedOfferProduct/13.webp";
import image14 from "../images/selectedOfferProduct/14.webp";
import image15 from "../images/selectedOfferProduct/15.webp";
import image16 from "../images/selectedOfferProduct/16.webp";
import image17 from "../images/selectedOfferProduct/17.webp";
import image18 from "../images/selectedOfferProduct/18.webp";
import CardGiftcardOutlined from "@mui/icons-material/CardGiftcardOutlined";

const imageDataArray = [
  {
    image: image1,
    price: 100, // قیمت
    discount: 20, // تخفیف درصدی
    discountedPrice: 80, // قیمت پس از تخفیف
  },
  {
    image: image2,
    price: 120,
    discount: 10,
    discountedPrice: 108,
  },
  {
    image: image3,
    price: 80,
    discount: 15,
    discountedPrice: 68,
  },
  {
    image: image4,
    price: 90,
    discount: 25,
    discountedPrice: 67.5,
  },
  {
    image: image5,
    price: 110,
    discount: 12,
    discountedPrice: 96.8,
  },
  {
    image: image6,
    price: 95,
    discount: 18,
    discountedPrice: 77.9,
  },
  {
    image: image7,
    price: 85,
    discount: 30,
    discountedPrice: 59.5,
  },
  {
    image: image8,
    price: 105,
    discount: 8,
    discountedPrice: 96.6,
  },
  {
    image: image9,
    price: 75,
    discount: 22,
    discountedPrice: 58.5,
  },
  {
    image: image10,
    price: 115,
    discount: 17,
    discountedPrice: 95.45,
  },
  {
    image: image11,
    price: 125,
    discount: 14,
    discountedPrice: 107.5,
  },
  {
    image: image12,
    price: 88,
    discount: 20,
    discountedPrice: 70.4,
  },
  {
    image: image13,
    price: 98,
    discount: 15,
    discountedPrice: 83.3,
  },
  {
    image: image14,
    price: 82,
    discount: 10,
    discountedPrice: 73.8,
  },
  {
    image: image15,
    price: 78,
    discount: 28,
    discountedPrice: 56.16,
  },
  {
    image: image16,
    price: 102,
    discount: 12,
    discountedPrice: 89.76,
  },
  {
    image: image17,
    price: 92,
    discount: 18,
    discountedPrice: 75.44,
  },
  {
    image: image18,
    price: 96,
    discount: 23,
    discountedPrice: 73.92,
  },
];

const SelectedOfferProduct = () => {
          return (
            <>
              <Box sx={{marginTop : "30px"}}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3>منتخب محصولات تخفیف و حراج</h3>
                  <CardGiftcardOutlined />
                </Box>
                <Grid container spacing={3}>
                  {imageDataArray.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          //     border: ".5px solid #ddd", 
                          //     borderRadius: "8px", 
                          boxShadow: "none",
                          cursor: "pointer",
                          transition: "transform 0.2s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={product.image}
                          alt={`Product ${index + 1}`}
                          sx={{
                            objectFit: "contain",
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="div">
                            <Box
                              component="span"
                              sx={{ textDecoration: "line-through", mr: 1 }}
                            >
                              {product.price * 1000}
                            </Box>

                            {product.discountedPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") * 1000}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            <Box
                              component="div"
                              sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                backgroundColor: "red",
                                color: "white",
                                padding: "4px",
                                borderRadius: "50%",
                              }}
                            >
                              {product.discount}% تخفیف
                            </Box>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          );
};

export default SelectedOfferProduct;
