import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FaDatabase } from "react-icons/fa";
import { SiRedux, SiCplusplus, SiMongodb, SiGit } from "react-icons/si";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import { colors } from "../../constants";
import Skill from "./Skill";
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
              spacing={4}
              justifyContent="center"
              alignItems="baseline"
              className={classes.techLogosGrid}
            >
              <Grid item className={classes.techLogo}>
                <Skill text="C/C++" icon={<SiCplusplus size={iconSize} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="HTML" icon={<IoLogoHtml5 size={iconSize} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="CSS" icon={<IoLogoCss3 size={iconSize} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="SASS" icon={<IoLogoSass size={iconSize} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill
                  text="Javascript"
                  icon={<IoLogoJavascript size={iconSize} />}
                />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="Nodejs" icon={<IoLogoNodejs size={iconSize} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="Reactjs" icon={<IoLogoReact size={iconSize} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="Redux" icon={<SiRedux size={iconSize2} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="SQL" icon={<FaDatabase size={iconSize2} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="MongoDb" icon={<SiMongodb size={iconSize2} />} />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill
                  text="Firebase"
                  icon={<IoLogoFirebase size={iconSize} />}
                />
              </Grid>

              <Grid item className={classes.techLogo}>
                <Skill text="Git" icon={<SiGit size={iconSize2} />} />
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
