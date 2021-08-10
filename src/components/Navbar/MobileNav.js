import { useState } from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { navLinks, scrollConfig } from "../../constants";
import ToggleSwitch from "./ToggleSwitch";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
  closeIcon: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  navLink: {
    marginBlock: theme.spacing(0.5),
  },
  outerSwitch: {
    [theme.breakpoints.down("350")]: {
      display: "none",
    },
  },
  innerSwitch: {
    [theme.breakpoints.up("350")]: {
      display: "none",
    },
  },
}));

function MobileNav({ darkTheme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Dark mode switch is displayed outside for screens with width >= 350px */}
      <Box className={classes.outerSwitch}>
        <ToggleSwitch darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Box>

      <IconButton onClick={toggleDrawer} aria-label="menu">
        <MenuIcon fontSize="large" />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <IconButton
          aria-label="close menu"
          onClick={toggleDrawer}
          className={classes.closeIcon}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Box py={3} px={5}>
          {navLinks.map((navLink, index) => (
            <Link
              key={index}
              to={navLink}
              smooth={scrollConfig.smooth}
              offset={scrollConfig.offsetSm}
            >
              <Button
                size="large"
                fullWidth
                className={classes.navLink}
                onClick={toggleDrawer}
              >
                {navLink}
              </Button>
            </Link>
          ))}

          <Button
            size="large"
            fullWidth
            disableRipple
            className={`${classes.navLink} ${classes.innerSwitch}`}
          >
            <ToggleSwitch darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </Button>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default MobileNav;
