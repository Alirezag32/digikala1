import { Box, CardMedia, Grid } from "@mui/material";
import manitorImage1 from '../images/UserVisits2/manitor/1.jpg';
import manitorImage2 from '../images/UserVisits2/manitor/2.jpg';
import manitorImage3 from '../images/UserVisits2/manitor/3.jpg';
import manitorImage4 from '../images/UserVisits2/manitor/4.jpg';

import caseImage1 from '../images/UserVisits2/case/1.jpg';
import caseImage2 from '../images/UserVisits2/case/2.jpg';
import caseImage3 from '../images/UserVisits2/case/3.jpg';
import caseImage4 from '../images/UserVisits2/case/4.jpg';

import case1Image1 from "../images/UserVisits2/case2/1.jpg";
import case1Image2 from "../images/UserVisits2/case2/2.jpg";
import case1Image3 from "../images/UserVisits2/case2/3.jpg";
import case1Image4 from "../images/UserVisits2/case2/4.jpg";

import standImage1 from '../images/UserVisits2/stand/1.jpg';
import standImage2 from '../images/UserVisits2/stand/2.jpg';
import standImage3 from '../images/UserVisits2/stand/3.jpg';
import standImage4 from '../images/UserVisits2/stand/4.jpg';
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

const UserVisit2 = () => {
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
        <Box>نمایشگر (مانیتور)</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={manitorImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={manitorImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={manitorImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={manitorImage4}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
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
        <Box>کیس کامپیوتر</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={case1Image1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={case1Image2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={case1Image3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={case1Image4}
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
        <Box>کیس اسمبل شده</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={caseImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={caseImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={caseImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={caseImage4}
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
        <Box>استند و پایه خنک کننده</Box>
        <span style={{ color: "gray" }}>بر اساس بازدید های شما</span>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={standImage1}
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ width: "100px", height: "100px" }}
              component="image"
              image={standImage2}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={standImage3}
              />
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "100px", height: "100px" }}
                component="image"
                image={standImage4}
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

export default UserVisit2;
