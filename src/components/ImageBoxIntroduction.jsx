import { CardMedia, Grid } from "@mui/material";
import image1 from "../images/MainBoxImagesunderlineSuperMarketMainImages/1.gif"
import image2 from "../images/MainBoxImagesunderlineSuperMarketMainImages/2.webp"
import image3 from "../images/MainBoxImagesunderlineSuperMarketMainImages/3.webp"
import image4 from "../images/MainBoxImagesunderlineSuperMarketMainImages/4.webp"
const ImageBoxIntroduction = () => {
          return (
            <>
              <Grid
                spacing={1}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  direction: "rtl",
                  marginTop: "30px",

                  marginBottom: "50px",
                }}
                container
              >
                <Grid item lg={3} md={6}>
                  <CardMedia
                    sx={{
                      width: "90%",
                      height: {
                        lg: "213px",
                        md: "250px",
                        sm: "300px",
                        xs: "350px",
                      },
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                    image={image1}
                    component="image"
                    alt=""
                  />
                </Grid>
                <Grid item lg={3} md={6}>
                  <CardMedia
                    sx={{
                      width: "90%",
                      height: {
                        lg: "213px",
                        md: "250px",
                        sm: "300px",
                        xs: "350px",
                      },
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                    image={image2}
                    component="image"
                  />
                </Grid>
                <Grid item lg={3} md={6}>
                  <CardMedia
                    sx={{
                      width: "90%",
                      height: {
                        lg: "213px",
                        md: "250px",
                        sm: "300px",
                        xs: "350px",
                      },
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                    image={image3}
                    component="image"
                  />
                </Grid>
                <Grid item lg={3} md={6}>
                  <CardMedia
                    sx={{
                      width: "90%",
                      height: {
                        lg: "213px",
                        md: "250px",
                        sm: "300px",
                        xs: "350px",
                                                                      },
                      cursor : "pointer",
                      borderRadius: "20px",
                    }}
                    image={image4}
                    component="image"
                  />
                </Grid>
              </Grid>
            </>
          );
}
 
export default ImageBoxIntroduction;