import { BottomNavigation, Box, Container, Typography } from "@mui/material";
import CustomBottomNavigation from "./bottomNavbar";
import Navbar from "./navbar";
import AvatarImageSlider from "./AvatarNavbar";
import HeaderSlider from "./headerSlider";
import MainLittelImages from "./mainLittelImages";
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
                <Box
                  sx={{
                    overflowX: "hidden",
                    overflowY: "hidden",
                    marginLeft: { lg: "100px", md: "0px", sm: "0px" },
                    marginRight: { lg: "100px", md: "0px", sm: "0px" },
                  }}
                >
                  <HeaderSlider />
                </Box>
              </header>
              <main>
                <Container maxWidth="lg">
                  <MainLittelImages />
                </Container>
              </main>
              <footer>
                <CustomBottomNavigation />
              </footer>
            </>
          );
}
 
export default Dashbord;