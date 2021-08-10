import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import { about } from "../../constants";
import DisplayLottie from "../Miscellaneous/DisplayLottie";
import useGlobalStyles from "../../hooks/useGlobalStyles";
import developerAboutAnimation from "../../assets/lotties/developer-about.json";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 0,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(15),
    },
  },
  aboutParas: {
    fontWeight: `${theme.palette.type === "dark" ? "bold" : "normal"}`,
    marginBlock: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(6),
    },
  },
  resumeBtn: {
    marginTop: theme.spacing(2),
  },
  animationGrid: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
}));

function About() {
  const theme = useTheme();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const xsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Fade bottom>
      <Container
        fixed
        className={`${classes.container} ${globalClasses.container}`}
        id="about"
      >
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} className={classes.animationGrid}>
            <DisplayLottie animationData={developerAboutAnimation} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              display="inline"
              color="textPrimary"
              className={globalClasses.heading}
            >
              About{" "}
            </Typography>
            <Typography
              variant="h2"
              display="inline"
              color="primary"
              className={globalClasses.heading}
            >
              Me
            </Typography>

            <Typography
              variant={xsScreen ? "subtitle1" : "h6"}
              color="textSecondary"
              className={classes.aboutParas}
            >
              {about.para1}
            </Typography>
            <Typography
              variant={xsScreen ? "subtitle1" : "h6"}
              color="textSecondary"
              className={classes.aboutParas}
            >
              {about.para2}
            </Typography>
            <Typography
              variant={xsScreen ? "subtitle1" : "h6"}
              color="textSecondary"
              className={classes.aboutParas}
            >
              {about.para3}
            </Typography>

            <Button
              href={about.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
              size={xsScreen ? "medium" : "large"}
              className={`${globalClasses.btn} ${classes.resumeBtn}`}
            >
              See resume
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}

export default About;
