import { Box, CardMedia, Grid } from "@mui/material";
import plus from "../images/digiPlus/plus-widget.png";
import image1 from "../images/digiPlus/1.jpg";
import image2 from "../images/digiPlus/2.jpg";
import image3 from "../images/digiPlus/3.jpg";
import image4 from "../images/digiPlus/4.jpg";
import image5 from "../images/digiPlus/5.jpg";
import image6 from "../images/digiPlus/6.jpg";
import image7 from "../images/digiPlus/7.jpg";
import image8 from "../images/digiPlus/8.jpg";
import image9 from "../images/digiPlus/9.jpg";
import image10 from "../images/digiPlus/10.jpg";
import image11 from "../images/digiPlus/11.jpg";
import image12 from "../images/digiPlus/12.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const DigiPlus = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#941b80",
        borderRadius: "30px",

        marginTop: "50px",

        direction: "rtl",
      }}
    >
      <Grid lg={3} item>
        {/* Content inside the background box */}
        <Box sx={{ marginLeft: "20px" }}>
          <h2 style={{ color: "white" }}>دی جی پلاس</h2>
        </Box>
      </Grid>
      <Grid lg={9} item>
        <Grid
          sx={{
            backgroundColor: "#ffff",

            borderRadius: "30px",
            marginTop: "20px",
          }}
          container
          spacing={2}
        >
          {images.map((image, index) => (
            <Grid key={index} lg={2} xs={3} item>
              <CardMedia
                component="img"
                image={image}
                alt={`image-${index}`}
                sx={{ width: "100px", height: "100px" }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DigiPlus;
