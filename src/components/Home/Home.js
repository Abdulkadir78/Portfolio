import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";
import emoji from "react-easy-emoji";
import Typed from "react-typed";

import { colors, scrollConfig, typingEffect } from "../../constants";
import useGlobalStyles from "../../hooks/useGlobalStyles";
import DisplayLottie from "../Miscellaneous/DisplayLottie";
import developerAnimation from "../../assets/lotties/developer-main.json";
import "./css/style.css";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(10%)",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translateY(2%)",
    },
  },
  greetingGrid: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-9rem",
    },
  },
  greetingBorder: {
    width: "5.5px",
    backgroundColor: colors.primary,
    borderRadius: "7px",
    marginTop: "7px",
    marginRight: theme.spacing(3.5),
  },
  greetingBox: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  greetingHello: {
    fontWeight: theme.palette.type === "dark" ? "bold" : "normal",
  },
  greetingName: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBlock: theme.spacing(1.2),
  },
  knowMoreBtn: {
    marginTop: theme.spacing(2.5),
  },
  developerLottie: {
    zIndex: "-1",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-8rem",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-6rem",
    },
  },
}));

function Home() {
  const theme = useTheme();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const xsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grow in timeout={1400}>
      <Container fixed id="home">
        <Grid container alignItems="center" className={classes.container}>
          <Grid item xs={12} md={5} className={classes.greetingGrid}>
            <Hidden smDown>
              <Box className={classes.greetingBorder} py={5} />
            </Hidden>

            <Box className={classes.greetingBox}>
              <Typography
                color="textSecondary"
                display="inline"
                variant={xsScreen ? "subtitle2" : "subtitle1"}
                className={classes.greetingHello}
              >
                Hello{" "}
              </Typography>
              <Typography
                display="inline"
                variant="h4"
                className={`waveEmoji  ${classes.greetingHello}`}
              >
                {emoji("👋")}
              </Typography>
              <Typography
                color="textSecondary"
                display="inline"
                variant={xsScreen ? "subtitle2" : "subtitle1"}
                className={classes.greetingHello}
              >
                , my name is
              </Typography>

              <Typography
                variant="h2"
                color="primary"
                className={classes.greetingName}
              >
                Abdulkadir
              </Typography>

              <Typography
                variant="h4"
                color="secondary"
                className={classes.greetingName}
              >
                <Typed
                  strings={typingEffect.strings}
                  typeSpeed={typingEffect.typeSpeed}
                  backSpeed={typingEffect.backSpeed}
                  loop
                />
              </Typography>

              <Link
                to="about"
                smooth={true}
                offset={
                  xsScreen ? scrollConfig.offsetSm : scrollConfig.offsetLg
                }
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={`${globalClasses.btn} ${classes.knowMoreBtn}`}
                >
                  know more
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={7} className={classes.developerLottie}>
            <DisplayLottie animationData={developerAnimation} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
