import { Box, CardMedia , Grid } from "@mui/material";
import keyBoardImage1 from "../images/UserVisits1/keyBoard/1.jpg";
import keyBoardImage2 from "../images/UserVisits1/keyBoard/2.jpg";
import keyBoardImage3 from "../images/UserVisits1/keyBoard/3.jpg";
import keyBoardImage4 from "../images/UserVisits1/keyBoard/4.jpg";

import mousePadImage1 from "../images/UserVisits1/mousePad/1.jpg";
import mousePadImage2 from "../images/UserVisits1/mousePad/2.jpg";
import mousePadImage3 from "../images/UserVisits1/mousePad/3.jpg";
import mousePadImage4 from "../images/UserVisits1/mousePad/4.jpg";

import mousesImage1 from "../images/UserVisits1/mouses/1.jpg";
import mousesImage2 from "../images/UserVisits1/mouses/2.jpg";
import mousesImage3 from "../images/UserVisits1/mouses/3.jpg";
import mousesImage4 from "../images/UserVisits1/mouses/4.jpg";

import phoneImage1 from "../images/UserVisits1/phone/1.jpg";
import phoneImage2 from "../images/UserVisits1/phone/2.jpg";
import phoneImage3 from "../images/UserVisits1/phone/3.jpg";
import phoneImage4 from "../images/UserVisits1/phone/4.jpg";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";



const UserVisit1 = () => {
  return (
    <Grid
      continer
      sx={{
        direction: "rtl",
        display: "flex",
        border: ".1px gray solid",
        justifyContent: "space-around",
        borderRadius: "30px",
      }}
    >
      <Grid xs={12} md={4} lg={3} item>
        <Box>ماوس(موشواره)</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={mousesImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={mousesImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={mousesImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={mousesImage4}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{  marginTop: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              color: "#19bfd3",
            }}
          >
            <p style={{ cursor: "pointer" }}>مشاهده</p>
            <ArrowBackIosNew />
          </Box>
        </Box>
      </Grid>

      <Grid xs={12} md={4} lg={3}>
        <Box>کیبورد</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={keyBoardImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={keyBoardImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={keyBoardImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={keyBoardImage4}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              color: "#19bfd3",
            }}
          >
            <p style={{ cursor: "pointer" }}>مشاهده</p>
            <ArrowBackIosNew />
          </Box>
        </Box>
      </Grid>

      <Grid xs={12} md={4} lg={3} item>
        <Box>ماوس پد</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={mousePadImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={mousePadImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={mousePadImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={mousePadImage4}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              color: "#19bfd3",
            }}
          >
            <p style={{ cursor: "pointer" }}>مشاهده</p>
            <ArrowBackIosNew />
          </Box>
        </Box>
      </Grid>

      <Grid xs={12} md={4} lg={3} item>
        <Box>گوشی</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={phoneImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={phoneImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={phoneImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={phoneImage4}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              color: "#19bfd3",
            }}
          >
            <p style={{ cursor: "pointer" }}>مشاهده</p>
            <ArrowBackIosNew />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserVisit1;
