import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

import { fonts } from "../../constants";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HideOnScroll from "../Miscellaneous/HideOnScroll";
import ScrollToTop from "../Miscellaneous/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      paddingInline: theme.spacing(7),
    },
  },
  brand: {
    flexGrow: 1,
  },
  brandName: {
    fontFamily: fonts.brand,
    paddingInline: theme.spacing(0.7),
  },

  toolbar: theme.mixins.toolbar,
}));

function Navbar({ darkTheme, toggleTheme }) {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar color="inherit" className={classes.appBar}>
          <Toolbar>
            <Box className={classes.brand}>
              <Link to="home" smooth={true} offset={-90} duration={0}>
                <IconButton>
                  <Typography color="textSecondary" variant="h5">
                    {"<"}
                  </Typography>
                  <Typography
                    color={darkTheme ? "inherit" : "primary"}
                    variant="h4"
                    className={classes.brandName}
                  >
                    Abdulkadir
                  </Typography>
                  <Typography color="textSecondary" variant="h5">
                    {"/>"}
                  </Typography>
                </IconButton>
              </Link>
            </Box>

            <Hidden smUp>
              <MobileNav darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </Hidden>

            <Hidden xsDown>
              <DesktopNav darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Box className={classes.toolbar} id="backToTopAnchor" />
      <ScrollToTop />
    </>
  );
}

export default Navbar;
