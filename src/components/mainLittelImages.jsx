import { Box, Grid , CardMedia,Typography } from "@mui/material";
import image1 from "../images/MainLittelImages/1.png"
import image2 from "../images/MainLittelImages/2.png"
import image3 from "../images/MainLittelImages/3.png"
import image4 from "../images/MainLittelImages/4.png"
import image5 from "../images/MainLittelImages/5.png"
import image6 from "../images/MainLittelImages/6.png"
import image7 from "../images/MainLittelImages/7.png"
import image8 from "../images/MainLittelImages/8.png"

const images = [
  { src: image1, title: "دیجی کالا جت" },
  { src: image2, title: "دیجی پی" },
  { src: image3, title: "حراج دیجی استایل" },
  { src: image4, title: "خرید سوپرمارکتی" },
  { src: image5, title: "موبایل کارکرده" },
  { src: image6, title: "خرید چکی" },
  { src: image7, title: "جایزه دیجی استایل" },
  { src: image8, title: "بیشتر" },
];


const MainLittelImages = () => {
          return (
            <Box sx={{marginTop : "30px"}}>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                {images.map((image, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width={75}
                      height={75}
                      image={image.src}
                      alt=""
                      sx={{
                        width: "75px",
                        height: "75px",
                        textAlign: "center",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", fontSize: "12px" , marginTop : "5px" }}
                    >
                      {image.title}
                    </Typography>
                  </Grid>
                ))}
                              </Grid>
                              
            </Box>
          );
}
 
export default MainLittelImages;