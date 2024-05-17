import { BottomNavigation, Box, Container, Typography } from "@mui/material";
import CustomBottomNavigation from "./bottomNavbar";
import Navbar from "./navbar";
import AvatarImageSlider from "./AvatarNavbar";
import HeaderSlider from "./headerSlider";
import MainLittelImages from "./mainLittelImages";
import MainOfferSlider from "./mainOfferSlider";
import SuperMarketOffer from "./superMarketOffer";
import ImageBoxIntroduction from "./ImageBoxIntroduction";
import ShopByCategory from "./shopByCategory";
import BrandImages1 from "./brandImages1";
import PopularBrandSlider from "./popuralBrandSlider";
import UserVisit1 from "./userVisit1";
import DigiPlus from "./digiPlus";
import DigiClub from "./digiClub";
import BestSellingProducts from "./bestSellingProducts";
import UserVisit2 from "./userVisit2";
import SelectedOfferProduct from "./selectedOfferProduct";
import HottestProducts from "./hottestProducts";
import MainReading from "./mainReading";
import FooterLg from "./footerLg";
import FooterLgLower from "./samallerComponets/footerLgLower";
const Dashbord = () => {
          return (
            <>
              <header>
                <Container maxWidth="lg">
                  <Navbar />

                  <Box
                    sx={{
                      marginTop: "120px",
                      marginBottom: "20px",
                      overflowX: "hidden",
                    }}
                  >
                    <AvatarImageSlider />
                  </Box>
                </Container>
                {/* <Box
                  sx={{
                    overflowX: "hidden",
                    overflowY: "hidden",
                    marginLeft: { lg: "100px", md: "0px", sm: "0px" },
                    marginRight: { lg: "100px", md: "0px", sm: "0px" },
                  }}
                ></Box> */}
                <HeaderSlider />
              </header>
              <main>
                <Container maxWidth="lg">
                  <MainLittelImages />
                </Container>
                <Container
                  sx={{
                    display: { lg: "block", md: "none" },
                    marginTop: "50px",
                  }}
                >
                  <MainOfferSlider />
                </Container>
                <Box
                  sx={{
                    display: { lg: "none", md: "block" },
                    marginTop: "50px",
                  }}
                >
                  <MainOfferSlider />
                </Box>
                <Container>
                  <SuperMarketOffer />
                </Container>
                <Container>
                  <ImageBoxIntroduction />
                  <ShopByCategory />
                  <BrandImages1 />
                  <PopularBrandSlider />
                  <UserVisit1 />
                  {/* <DigiPlus /> */}
                  <DigiClub />
                  <BestSellingProducts />
                  <UserVisit2 />
                  <SelectedOfferProduct />
                  <HottestProducts />
                  <MainReading />
                </Container>
              </main>
              <footer>
                <Box sx={{display  :{lg : "block" , md : "none"}}}>
                  <FooterLg />
                </Box>
                <Box sx={{display  :{lg : "none" , md : "block"}}}>
                  <FooterLgLower />
                </Box>

                <CustomBottomNavigation />
              </footer>
            </>
          );
}
 
export default Dashbord;