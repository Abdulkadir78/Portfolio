import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FaDatabase } from "react-icons/fa";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";

import {
  SiCplusplus,
  SiMongodb,
  SiGit,
  SiBootstrap,
  SiMaterialUi,
} from "react-icons/si";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import { colors } from "../../constants";
import useGlobalStyles from "../../hooks/useGlobalStyles";
import DisplayLottie from "../Miscellaneous/DisplayLottie";
import developerTechAnimation from "../../assets/lotties/build.json";

const useStyles = makeStyles((theme) => ({
  techLogosGrid: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  techLogo: {
    color: colors.techLogoGrey,
    textAlign: "center",
  },
  techText: {
    fontWeight: `${theme.palette.type === "dark" ? "bold" : "normal"}`,
    marginTop: theme.spacing(0.5),
  },
  animationGrid: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-2rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: theme.spacing(-5),
    },
  },
}));

function Skills() {
  const theme = useTheme();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const xsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const iconSize = xsScreen ? 50 : 60;
  const iconSize2 = xsScreen ? 45 : 55;

  return (
    <Fade bottom>
      <Container fixed className={globalClasses.container} id="skills">
        <Typography
          variant="h2"
          display="inline"
          color="primary"
          className={`${globalClasses.heading} ${globalClasses.leftHeading}`}
          noWrap
        >
          My{" "}
        </Typography>
        <Typography
          variant="h2"
          display="inline"
          color="textPrimary"
          className={globalClasses.heading}
          noWrap
        >
          tech{" "}
        </Typography>
        <Typography
          variant="h2"
          display="inline"
          color="textPrimary"
          className={globalClasses.heading}
          noWrap
        >
          stack
        </Typography>

        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} lg={5}>
            <Grid
              container
              justifyContent="center"
              alignItems="baseline"
              spacing={xsScreen ? 4 : 3}
              className={classes.techLogosGrid}
            >
              <Grid item className={classes.techLogo}>
                <SiCplusplus size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  C/C++
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <IoLogoHtml5 size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  HTML
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <IoLogoCss3 size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  CSS
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <IoLogoJavascript size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Javascript
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <IoLogoNodejs size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Nodejs
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <IoLogoReact size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Reactjs
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <FaDatabase size={iconSize2} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  SQL
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <SiMongodb size={iconSize2} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  MongoDb
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <IoLogoFirebase size={iconSize} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Firebase
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <SiGit size={iconSize2} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Git
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <SiBootstrap size={iconSize2} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Bootstrap
                </Typography>
              </Grid>

              <Grid item className={classes.techLogo}>
                <SiMaterialUi size={iconSize2} />
                <Typography
                  align="center"
                  color="textSecondary"
                  className={classes.techText}
                >
                  Material-UI
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={7} className={classes.animationGrid}>
            <DisplayLottie animationData={developerTechAnimation} />
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}

export default Skills;
