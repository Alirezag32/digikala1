import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BoxOffer from "../images/offerSliderImages/box.webp"
const images = [
  require("../images/offerSliderImages/1.webp"),
  require("../images/offerSliderImages/2.webp"),
  require("../images/offerSliderImages/3.webp"),
  require("../images/offerSliderImages/4.webp"),
  require("../images/offerSliderImages/5.webp"),
  require("../images/offerSliderImages/6.webp"),
  require("../images/offerSliderImages/7.webp"),
  require("../images/offerSliderImages/8.webp"),
  require("../images/offerSliderImages/9.webp"),
  require("../images/offerSliderImages/10.webp"),
  require("../images/offerSliderImages/11.webp"),
  require("../images/offerSliderImages/12.webp"),
];

const products = [
  {id:1 , image: images[0], price: 100, discount: 10 },
  {id:2 , image: images[1], price: 80, discount: 5 },
  {id:3 , image: images[2], price: 120, discount: 15 },
  {id:4 , image: images[3], price: 90, discount: 8 },
  {id:5 , image: images[4], price: 110, discount: 12 },
  {id:6 , image: images[5], price: 95, discount: 6 },
  {id:7 , image: images[6], price: 130, discount: 18 },
  {id:8 , image: images[7], price: 75, discount: 3 },
  {id:9 , image: images[8], price: 85, discount: 7 },
  {id:10 , image: images[9], price: 105, discount: 10 },
  {id:11 , image: images[10], price: 115, discount: 14 },
  {id:12 , image: images[11], price: 70, discount: 4 },
];

const productsWithDiscountedPrice = products.map((product) => {
  const discountedPrice = Math.round(product.price * (1 - product.discount / 100));
  return { ...product, discountedPrice };
});

export default function OfferSlider() {
  

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    
    arrows: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ef394e",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "50px",
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid sx={{ direction: "rtl" }} lg={9} md={9} sm={9} xs={9} item>
          <Slider className="offerSlider" {...settings}>
            {productsWithDiscountedPrice.map((product) => (
              <div key={product.id} style={{ textAlign: "center" }}>
                <Card
                  sx={{
                    borderRadius: "10px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    width: "95%",
                    height: "50%",
                  }}
                >
                  <img
                    src={product.image}
                    alt={`تصویر اسلاید ${product.id}`}
                    style={{ width: "100%", height: "70%" }}
                  />

                  <CardContent>
                    <Typography
                      sx={{
                        display: "block",
                        direction: "rtl",
                      }}
                      variant="body1"
                    >
                      {product.discountedPrice},000
                    </Typography>
                    <Typography
                      sx={{
                        direction: "rtl",
                        textDecoration: "line-through",
                        opacity: 0.5,
                      }}
                      variant="body1"
                    >
                      {product.price },000
                    </Typography>

                    <Box sx={{ marginTop: "10px" }}>
                      <Box
                        sx={{
                          display: "inline-block",
                          borderRadius: "25%",
                          backgroundColor: "red",
                          color: "white",
                          padding: "5px 10px",
                          fontWeight: "bold",
                        }}
                      >
                        {product.discount} %
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Grid>

        <Grid
          sx={{
            direction: "rtl",
            display: "flex",
          }}
          lg={3}
          item
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M77.7524 14.9378C77.8003 15.3691 78.1744 15.7052 78.6289 15.7052H84.8224L84.9185 15.7001C85.3603 15.6533 85.7041 15.2876 85.7041 14.844V12.8462L85.699 12.7524C85.6511 12.3209 85.2769 11.9851 84.8224 11.9851L81.9819 11.9853L81.9811 10.8612L81.9759 10.7673C81.928 10.3358 81.5539 10 81.0991 10H78.6291L78.533 10.0051C78.0912 10.0518 77.7474 10.4172 77.7474 10.8612L77.7472 14.844L77.7524 14.9378Z"
                fill="white"
              />
              <path
                d="M110.254 34.586C110.207 34.1547 109.832 33.8186 109.378 33.8186H103.184L103.088 33.8237C102.647 33.8705 102.303 34.2362 102.303 34.6798V36.6776L102.308 36.7714C102.356 37.2029 102.73 37.5387 103.184 37.5387L106.025 37.5385L106.026 38.6626L106.031 38.7565C106.079 39.188 106.453 39.5238 106.908 39.5238H109.378L109.474 39.5188C109.916 39.472 110.259 39.1066 110.259 38.6626L110.26 34.6798L110.254 34.586Z"
                fill="white"
              />
              <path
                d="M97.2623 33.8399C97.7021 33.8399 98.0262 34.1259 98.0702 34.5371L98.0753 34.6342V37.0171C98.0753 37.4467 97.7827 37.7633 97.3617 37.8063L97.2623 37.8114H90.7581C90.3182 37.8114 89.9942 37.5255 89.9501 37.1141L89.945 37.0171V34.6342C89.945 34.2046 90.2377 33.8879 90.6587 33.8449L90.7581 33.8399H97.2623Z"
                fill="white"
              />
              <path
                d="M59.4446 12.2931C59.4005 11.8819 59.0763 11.5959 58.6367 11.5959H55.7911L55.6917 11.6009C55.2708 11.6439 54.978 11.9607 54.978 12.3902V14.7731L54.9831 14.8702C55.0272 15.2815 55.3514 15.5674 55.7911 15.5674H58.6367L58.736 15.5624C59.1569 15.5193 59.4497 15.2028 59.4497 14.7731V12.3902L59.4446 12.2931Z"
                fill="white"
              />
              <path
                d="M15.1303 15.571C18.502 15.571 20.7273 17.6765 20.8186 20.9224L20.8215 21.1311V25.8969C20.8215 29.1909 18.6664 31.365 15.3439 31.4541L15.1303 31.457H7.81302C7.37382 31.457 7.04926 31.1707 7.00512 30.7597L7 30.6627V28.2798C7 27.8504 7.29319 27.5336 7.71378 27.4905L7.81302 27.4855H15.1303C16.1905 27.4855 16.7102 27.0224 16.7534 26.0348L16.7564 25.8969V21.1311C16.7564 20.0955 16.2827 19.5876 15.2715 19.5454L15.1303 19.5425H7.81302C7.37382 19.5425 7.04926 19.2561 7.00512 18.8452L7 18.7482V16.3653C7 15.9361 7.29319 15.6191 7.71378 15.576L7.81302 15.571H15.1303Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.3956 22.7671V27.5547H29.7692C28.4219 27.5547 27.3296 26.4829 27.3296 25.1609V11.5959C27.3296 11.1552 26.9656 10.7979 26.5165 10.7979H24.0769C23.6278 10.7979 23.2637 11.1552 23.2637 11.5959V25.1609C23.2637 28.6864 26.1763 31.5444 29.7692 31.5444H47.2527C48.7276 31.5444 50.0802 31.0307 51.1349 30.1756L51.8581 31.2007C52.01 31.4159 52.2598 31.5444 52.5267 31.5444H57.3863C59.2369 31.5444 60.907 30.7862 62.0916 29.5691L63.2427 31.2007C63.3946 31.4159 63.6444 31.5444 63.9113 31.5444H68.7709C70.3782 31.5444 71.8493 30.9725 72.9844 30.0247L73.8141 31.2007C73.966 31.4159 74.2159 31.5444 74.4827 31.5444H77.7042C79.3185 31.5444 80.7954 30.9675 81.9325 30.0123L82.7709 31.2007C82.9228 31.4159 83.1727 31.5444 83.4395 31.5444H84.2215C85.9164 31.5444 87.4599 30.9084 88.6177 29.8664L89.3082 31.1248C89.45 31.3832 89.725 31.5444 90.0242 31.5444H95.6373C97.2412 31.5444 98.6902 30.8935 99.7249 29.8462L100.681 31.2007C100.832 31.4159 101.082 31.5444 101.349 31.5444H106.209C109.802 31.5444 112.714 28.6864 112.714 25.1609V20.3732C112.714 19.9325 112.35 19.5753 111.901 19.5753H109.462C109.012 19.5753 108.648 19.9325 108.648 20.3732V25.1609C108.648 26.4829 107.556 27.5547 106.209 27.5547H101.094C101.247 27.049 101.33 26.5134 101.33 25.9588V20.3732C101.33 19.9325 100.966 19.5753 100.516 19.5753H98.0769C97.6278 19.5753 97.2637 19.9325 97.2637 20.3732V25.9588C97.2637 26.8402 96.5356 27.5547 95.6373 27.5547H90.7582V20.3732C90.7582 19.9325 90.3941 19.5753 89.945 19.5753H87.4743C87.0252 19.5753 86.6611 19.9325 86.6611 20.3732V25.1609C86.6611 26.4829 85.5688 27.5547 84.2215 27.5547H83.7369C84.0418 26.8155 84.2097 26.0074 84.2097 25.1609V20.3732C84.2097 19.9325 83.8456 19.5753 83.3965 19.5753H80.957C80.5079 19.5753 80.1438 19.9325 80.1438 20.3732V25.1609C80.1438 26.4829 79.0516 27.5547 77.7042 27.5547H74.8035C75.1085 26.8155 75.2764 26.0074 75.2764 25.1609V20.3732C75.2764 19.9325 74.9123 19.5753 74.4632 19.5753H72.0237C71.5745 19.5753 71.2105 19.9325 71.2105 20.3732V25.1609C71.2105 26.4829 70.1182 27.5547 68.7709 27.5547H63.4189C63.7239 26.8155 63.8918 26.0074 63.8918 25.1609V20.3732C63.8918 19.9325 63.5277 19.5753 63.0786 19.5753H60.6391C60.1899 19.5753 59.8259 19.9325 59.8259 20.3732V25.1609C59.8259 26.4829 58.7336 27.5547 57.3863 27.5547H53.0046C53.2293 26.9307 53.3516 26.2593 53.3516 25.5598C53.3516 22.2547 50.6211 19.5753 47.2527 19.5753L43.5363 19.5753C42.4114 17.6673 40.309 16.3835 37.9011 16.3835C34.3082 16.3835 31.3956 19.2415 31.3956 22.7671ZM37.9011 20.3732C36.5538 20.3732 35.4615 21.445 35.4615 22.7671V27.5547H40.3406V22.7671C40.3406 21.445 39.2484 20.3732 37.9011 20.3732ZM44.4066 27.5547V23.565H47.2527C48.3755 23.565 49.2857 24.4581 49.2857 25.5598C49.2857 26.6616 48.3755 27.5547 47.2527 27.5547H44.4066Z"
                fill="white"
              />
              <path
                d="M98.7052 53.1463C98.7538 53.5875 99.1339 53.9314 99.5957 53.9314H105.889L105.986 53.9262C106.435 53.8783 106.784 53.5042 106.784 53.0504V51.0065L106.779 50.9105C106.731 50.4691 106.35 50.1255 105.889 50.1255L103.003 50.1257L103.002 48.9757L102.996 48.8797C102.948 48.4383 102.568 48.0947 102.106 48.0947H99.5958L99.4983 48.0999C99.0494 48.1477 98.7001 48.5216 98.7001 48.9757L98.6999 53.0504L98.7052 53.1463Z"
                fill="white"
              />
              <path
                d="M28.8538 55.3387C28.809 54.918 28.4798 54.6253 28.0329 54.6253H21.4242L21.3233 54.6305C20.8955 54.6745 20.5982 54.9985 20.5982 55.4379V57.8757L20.6034 57.9751C20.6481 58.3959 20.9774 58.6883 21.4242 58.6883H28.0329L28.1339 58.6832C28.5616 58.6392 28.859 58.3153 28.859 57.8757V55.4379L28.8538 55.3387Z"
                fill="white"
              />
              <path
                d="M56.2172 48.0947C56.6639 48.0947 56.9933 48.3874 57.0381 48.8081L57.0433 48.9073V51.3451C57.0433 51.7847 56.7458 52.1086 56.3181 52.1526L56.2172 52.1577H53.3259C52.8792 52.1577 52.5498 51.8652 52.5051 51.4444L52.4998 51.3451V48.9073C52.4998 48.4679 52.7973 48.1439 53.225 48.0999L53.3259 48.0947H56.2172Z"
                fill="white"
              />
              <path
                d="M68.7287 48.0947C68.4737 48.0947 68.233 48.211 68.0765 48.4099L62.8002 55.1123C62.6946 55.2463 62.7913 55.4417 62.9632 55.4417H63.7892C64.0442 55.4417 64.2849 55.3254 64.4414 55.1265L69.7177 48.4241C69.8233 48.2901 69.7266 48.0947 69.5547 48.0947H68.7287Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.108 66.8702H74.1047C76.4689 66.8702 78.2351 65.1248 78.2351 62.7886C78.2351 60.4524 76.4689 58.707 74.1047 58.707H64.6048C63.8613 58.707 63.718 58.0486 64.1917 57.4825L71.1489 48.7026C71.4711 48.3177 71.9504 48.0947 72.4557 48.0947H75.6293C76.2678 48.0947 76.6176 48.8294 76.2107 49.3155L72.0395 54.6253H74.1047C78.5618 54.6253 81.9451 57.7084 82.3291 61.9723H82.3655V63.6049H82.3291C82.2215 64.8001 81.8782 65.9025 81.3417 66.8702H90.4057C91.7747 66.8702 92.8844 65.7738 92.8844 64.4213V59.5233C92.8844 59.0725 93.2544 58.707 93.7107 58.707H96.1894C96.6457 58.707 97.0156 59.0725 97.0156 59.5233V64.4213C97.0156 65.2873 96.845 66.114 96.5352 66.8702H99.4824C100.851 66.8702 101.961 65.7738 101.961 64.4213V59.5233C101.961 59.0725 102.331 58.707 102.787 58.707H105.266C105.722 58.707 106.092 59.0725 106.092 59.5233V64.4213C106.092 65.2873 105.922 66.114 105.612 66.8702H106.104C107.473 66.8702 108.583 65.7738 108.583 64.4213V59.5233C108.583 59.0725 108.953 58.707 109.409 58.707H111.888C112.344 58.707 112.714 59.0725 112.714 59.5233V64.4213C112.714 68.028 109.755 70.9519 106.104 70.9519H105.31C105.039 70.9519 104.785 70.8204 104.63 70.6002L103.779 69.3845C102.623 70.3617 101.123 70.9519 99.4824 70.9519H96.2092C95.9381 70.9519 95.6842 70.8204 95.5299 70.6002L94.6869 69.3971C93.5335 70.3668 92.0388 70.9519 90.4057 70.9519H80.7062C80.435 70.9519 80.1812 70.8204 80.0268 70.6002L79.1554 69.3566C77.7811 70.3678 76.0446 70.9519 74.1047 70.9519H41.6206C41.3495 70.9519 41.0956 70.8204 40.9413 70.6002L40.0982 69.3971C38.9449 70.3667 37.4501 70.9519 35.817 70.9519H13.6099C9.95936 70.9519 7 68.028 7 64.4213V59.5233C7 59.0725 7.36992 58.707 7.82624 58.707H10.305C10.7613 58.707 11.1312 59.0725 11.1312 59.5233V64.4213C11.1312 65.7738 12.241 66.8702 13.6099 66.8702H35.817C37.186 66.8702 38.2958 65.7738 38.2958 64.4213V59.5233C38.2958 59.0725 38.6657 58.707 39.122 58.707H41.6007C42.057 58.707 42.427 59.0725 42.427 59.5233V64.4213C42.427 65.2873 42.2563 66.114 41.9465 66.8702H48.8491C48.5393 66.114 48.3686 65.2873 48.3686 64.4213V61.9723C48.3686 58.3655 51.328 55.4417 54.9786 55.4417C58.6291 55.4417 61.5885 58.3655 61.5885 61.9723V64.4213C61.5885 65.2873 61.4179 66.114 61.108 66.8702ZM57.4573 61.9723V64.4213C57.4573 65.7738 56.3475 66.8702 54.9786 66.8702C53.6096 66.8702 52.4998 65.7738 52.4998 64.4213V61.9723C52.4998 60.6197 53.6096 59.5233 54.9786 59.5233C56.3475 59.5233 57.4573 60.6197 57.4573 61.9723Z"
                fill="white"
              />
              <path
                d="M15.1277 91.7882C14.6548 91.7882 14.3149 92.1215 14.3149 92.5851V103.741C14.3149 104.828 13.7973 105.335 12.6892 105.335H7.81285C7.3398 105.335 7 105.669 7 106.132V108.523C7 108.987 7.3398 109.32 7.81285 109.32H12.6892C16.347 109.32 18.3791 107.327 18.3791 103.741V102.055L19.3279 103.398C19.4797 103.613 19.7295 103.741 19.9963 103.741H40.6273C42.2581 103.741 43.7488 103.153 44.8904 102.181L46.1367 103.741H70.6434C73.0628 103.741 75.1606 102.826 76.6188 101.306L78.0967 103.398C78.2486 103.613 78.4984 103.741 78.7652 103.741H99.6749C103.267 103.741 106.179 100.887 106.179 97.3664V92.5851C106.179 92.145 105.815 91.7882 105.366 91.7882H102.927C102.478 91.7882 102.114 92.145 102.114 92.5851V97.3664C102.114 98.6867 101.022 99.757 99.6749 99.757H77.7645C78.2924 98.8124 78.6302 97.7362 78.7361 96.5695H78.772V95.7726C78.772 91.203 75.3045 87.8038 70.6434 87.8038H68.6113L72.7157 82.6204C73.116 82.1459 72.7718 81.4287 72.1436 81.4287H69.0209C68.5236 81.4287 68.052 81.6463 67.7349 82.0221L60.8892 90.5929C60.4231 91.1456 60.5641 91.7882 61.2956 91.7882H70.6434C72.9697 91.7882 74.7077 93.492 74.7077 95.7726C74.7077 98.0532 72.9697 99.757 70.6434 99.757H46.6585C46.9634 99.0188 47.1313 98.2118 47.1313 97.3664V92.5851C47.1313 92.145 46.7673 91.7882 46.3183 91.7882H43.8793C43.4303 91.7882 43.0663 92.145 43.0663 92.5851V97.3664C43.0663 98.6867 41.9743 99.757 40.6273 99.757H18.3791V92.5851C18.3791 92.1215 18.0393 91.7882 17.5663 91.7882H15.1277Z"
                fill="white"
              />
              <path
                d="M35.3325 106.73C35.2884 106.32 34.9644 106.034 34.5247 106.034H28.0219L27.9226 106.039C27.5016 106.082 27.2091 106.398 27.2091 106.827V109.207L27.2142 109.304C27.2582 109.715 27.5822 110 28.0219 110H34.5247L34.6241 109.995C35.045 109.952 35.3376 109.636 35.3376 109.207V106.827L35.3325 106.73Z"
                fill="white"
              />
              <path
                d="M17.5693 83.8194C18.0088 83.8194 18.3329 84.105 18.377 84.5157L18.3821 84.6126V86.9923C18.3821 87.4215 18.0894 87.7376 17.6686 87.7806L17.5693 87.7856H15.1299C14.6904 87.7856 14.3663 87.5001 14.3222 87.0893L14.3171 86.9923V84.6126C14.3171 84.1836 14.6098 83.8674 15.0306 83.8244L15.1299 83.8194H17.5693Z"
                fill="white"
              />
              <path
                d="M100.112 83.8194C100.552 83.8194 100.876 84.105 100.92 84.5157L100.925 84.6126V86.9923C100.925 87.4215 100.632 87.7376 100.211 87.7806L100.112 87.7856H97.267C96.8274 87.7856 96.5033 87.5001 96.4592 87.0893L96.4541 86.9923V84.6126C96.4541 84.1836 96.7468 83.8674 97.1676 83.8244L97.267 83.8194H100.112Z"
                fill="white"
              />
              <path
                d="M65.3535 81.4287C65.1026 81.4287 64.8658 81.5422 64.7117 81.7364L59.5199 88.2791C59.4161 88.41 59.5112 88.6007 59.6804 88.6007H60.4932C60.7441 88.6007 60.9809 88.4871 61.1349 88.293L66.3267 81.7502C66.4306 81.6194 66.3354 81.4287 66.1663 81.4287H65.3535Z"
                fill="white"
              />
              <path
                d="M108.649 83.8194C108.649 83.3793 109.013 83.0225 109.462 83.0225H111.901C112.35 83.0225 112.714 83.3793 112.714 83.8194V102.945C112.714 103.385 112.35 103.741 111.901 103.741H109.462C109.013 103.741 108.649 103.385 108.649 102.945V83.8194Z"
                fill="white"
              />
            </svg>
            <CardMedia
              component="image"
              image={BoxOffer}
              width={75}
              height={75}
              alt=""
              sx={{
                width: "200px",
                height: "150px",
                textAlign: "center",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              مشاهده همه
              <ArrowBackIosNewIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
