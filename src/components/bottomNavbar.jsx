import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutline from "@mui/icons-material/PersonOutline";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      sx={{
        
        display: { lg: "none", display: "flex", width: "100%" , position : "fixed" , bottom  :"0px" },
        justifyContent: "space-between", 
        padding: "0 16px", 
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction  label="خانه" icon={<HomeIcon />} />
      <BottomNavigationAction label="دسته بندی" icon={<GridViewIcon />} />
      <BottomNavigationAction label="سبد خرید" icon={<ShoppingCart />} />
      <BottomNavigationAction label="دیجیکالای من" icon={<PersonOutline />} />
    </BottomNavigation>
  );
}