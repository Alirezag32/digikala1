import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Container,
  Divider,
  SvgIcon
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Navbar = () => {
  
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "0 2px 4px -1px ",
        direction: "rtl",
        backgroundColor: "#FFFFFF",
        marginBottom: "30px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, marginRight: { lg: "15vh", md: "0", sm: "0" } }}
        >
          <SvgIcon
            sx={{ width: { xs: "60px", sm: "115px" }, height: "30" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115 30"
          >
            <g fill="none" fill-rule="evenodd">
              <g fill="#EE384E">
                <g>
                  <g>
                    <path
                      d="M76.916 19.024h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zm26.883 0h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zM88.117 6.951v15.366c0 .484-.625 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm26.883 0v15.366c0 .484-.624 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm-74.675 3.293h-6.721c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78zm4.48-3.293V23.78c0 3.523-3.117 6.22-6.72 6.22H34.62c-.515 0-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16 0 2.24-.696 2.24-1.83v-.365h-6.72c-3.604 0-6.72-3.063-6.72-6.586v-4.39c0-3.523 3.116-6.585 6.72-6.585h4.107c.514 0 1.074.405 1.437.731l1.177 1.098V6.95c0-.483.625-1.097 1.12-1.097h2.24c.496 0 1.12.613 1.12 1.097zM4.481 16.83c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39zM16.8 0c.497 0 1.121.613 1.121 1.098v21.22c0 .483-.624 1.097-1.12 1.097h-2.24c-.496 0-1.12-.613-1.12-1.098v-.732l-1.175 1.232c-.318.346-.932.598-1.44.598H6.722C3.117 23.415 0 20.352 0 16.829v-4.356c0-3.523 3.117-6.62 6.72-6.62h6.722V1.099c0-.485.624-1.098 1.12-1.098h2.24zm46.3 14.634L69.336 6.9c.347-.421.04-1.048-.513-1.048h-3.566c-.27 0-.525.119-.696.323l-6.314 7.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496 0-1.12.613-1.12 1.098v21.22c0 .483.624 1.097 1.12 1.097h2.24c.495 0 1.12-.614 1.12-1.098v-6.951l6.317 7.744c.17.207.428.328.7.328h3.562c.554 0 .86-.627.514-1.048l-6.24-7.756zM48.166 0c-.496 0-1.12.613-1.12 1.098v2.195c0 .484.624 1.097 1.12 1.097h2.24c.495 0 1.12-.613 1.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0 5.854c-.496 0-1.12.613-1.12 1.097v15.366c0 .484.8 1.12 1.295 1.12l2.065-.022c.495 0 1.12-.614 1.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282 0c-.495 0-1.12.613-1.12 1.098v2.195c0 .484.625 1.097 1.12 1.097h2.24c.496 0 1.12-.613 1.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0 5.854c-.495 0-1.12.613-1.12 1.097v15.366c0 .484.625 1.098 1.12 1.098h2.24c.496 0 1.12-.614 1.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0 .483-.625 1.097-1.12 1.097h-2.24c-.496 0-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097 1.12-1.097h2.24c.495 0 1.12.613 1.12 1.098z"
                      transform="translate(-1235 -19) translate(-238) translate(1473 19)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </SvgIcon>
        </Typography>
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            backgroundColor: "#f0f0f0",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            mr: 2,
            width: "100%",
            "@media (min-width: 600px)": {
              marginRight: "5px",
              width: "auto",
            },
          }}
        >
          <InputBase
            placeholder="جستجو..."
            sx={{
              cursor: "pointer",
              pl: 4,
              pr: 1,
              width: { lg: "500px", sm: "400px", xs: "100px", md: "500px" },
              color: "rgb(240, 240, 241)",
              "&::placeholder": {
                color: "inherit",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            left: "100px",
          }}
        >
          <Box>
            <PersonOutlineIcon sx={{ color: "black" }} />
            <ArrowDropDownIcon sx={{ color: "black" }} />
          </Box>
          <Box>
            <ShoppingCartIcon sx={{ color: "black" }} />
          </Box>
        </Box>
      </Toolbar>
      <Box
        sx={{
          display: { lg: "flex", md: "none", sm: "none", xs: "none" },
          flexDirection: "row",
          alignItems: "center",
          marginRight: "18vh",
          color: "black",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <DehazeIcon sx={{ color: "black", marginLeft: "20px" }} />
          دسته بندی کالا ها
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "10px",
            
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          <LocalOfferIcon />
          شگفت انگیز ها
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "20px",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          <ShoppingBasketOutlinedIcon />
          سوپرمارکت
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "20px",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          <CardGiftcardOutlinedIcon />
          کارت هدیه
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "20px",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          <WhatshotOutlinedIcon />
          پرفروش ترین ها
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "20px",
            borderLeft: ".5px solid gray",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          <CardGiftcardOutlinedIcon />
          تخفیف ها و پیشنهاد ها
        </Box>
        <Box
          sx={{
            marginRight: "20px",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          سوالی دارید؟
        </Box>
        <Box
          sx={{
            marginRight: "20px",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
            "&:hover": {
              borderBottomColor: "red",
            },
          }}
        >
          در دیجیکالا بفروشید
        </Box>
        {/* <Box sx={{ marginRight: "10px" }}>
          <LocationOnOutlinedIcon />

        </Box> */}
      </Box>
      <Divider />
    </AppBar>
  );
};

export default Navbar;
