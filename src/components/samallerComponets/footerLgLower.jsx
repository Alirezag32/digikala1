import { Box, Button, CardMedia } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import imgDigikala from '/پروژه های برنامه نویسی/digikala/digikala/src/images/footer/firstImageBox/digikala.webp'
import FooterShowMore from "./footerShowMore";
const FooterLgLower = () => {
  return (
    <Box
      sx={{
        marginBottom: "70px",
        marginRight: "10px",
        marginLeft: "10px",
        direction: "rtl",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Button
          sx={{
            paddingRight: "30px",
            paddingLeft: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            color: "#19bfd3",

            borderRadius: "10px",
          }}
        >
          بازگشت به بالا
          <ExpandLess />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box>
            <SupportAgentIcon sx={{ padding: "30px" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>7هفت روز هفته</Box>
            <Box>تماس با پشتیبانی</Box>
          </Box>
        </Box>
        <Box>
          <Button sx={{ color: "black", border: "1px solid black" }}>
            تماس
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box>
            {/* <CardMedia
              width="64px"
              height="64px"
              component="image"
              image={imgDigikala}
            /> */}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>تجربه خرید بهتر در</Box>
            <Box>اپلیکیشن دیجی کالا</Box>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              color: "#ffff",
              backgroundColor: "black",
              border: "1px solid black",
            }}
          >
            تماس
          </Button>
        </Box>
      </Box>
      <Box sx={{marginTop : "20px"}}> 
        <FooterShowMore />
      </Box>
    </Box>
  );
};

export default FooterLgLower;
