import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    backgroundColor: "lightblue",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    textAlign: "center",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents Booking" icon={<RestoreIcon />} />
      <BottomNavigationAction
        label="Nearby Hospitals"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
    </BottomNavigation>
  );
}
