
import image1 from "../images/ImagesForBrand1/1.webp"
import image2 from "../images/ImagesForBrand1/2.webp"
import { CardMedia, Grid } from "@mui/material";
const BrandImages1 = () => {
          return (
            <Grid
              spacing={2}
                              sx={{ display: "flex", flexDirection: { lg: "row", sm : "column"}, gap: 2 }}
              continer
            >
              <Grid
                sx={{ width: "100%", height: "100%" }}
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <CardMedia
                  sx={{ width: "100%", height: "300px", borderRadius: "20px" , }}
                  image={image1}
                  component="image"
                />
              </Grid>
              <Grid
                sx={{ width: "100%", height: "100%" }}
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <CardMedia
                  sx={{ width: "100%", height: "300px", borderRadius: "20px" }}
                  image={image2}
                  component="image"
                />
              </Grid>
            </Grid>
          );
}
 
export default BrandImages1;