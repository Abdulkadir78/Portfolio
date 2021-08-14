import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import { contact } from "../../constants";
import ContactCard from "./ContactCard";
import useGlobalStyles from "../../hooks/useGlobalStyles";
import DisplayLottie from "../Miscellaneous/DisplayLottie";
import contactAnimation from "../../assets/lotties/contact.json";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
    },
  },
  subHeading: {
    marginTop: theme.spacing(1.5),
    fontWeight: `${theme.palette.type === "dark" ? "bold" : "normal"}`,
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(-6),
    },
  },
  animation: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    },
  },
}));

function Contact() {
  const theme = useTheme();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const xsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Fade bottom>
      <Container
        fixed
        className={`${classes.container} ${globalClasses.container}`}
        id="contact"
      >
        <Typography
          variant="h2"
          display="inline"
          color="textPrimary"
          className={`${globalClasses.heading} ${globalClasses.leftHeading}`}
          noWrap
        >
          Get In{" "}
        </Typography>
        <Typography
          variant="h2"
          display="inline"
          color="primary"
          className={globalClasses.heading}
          noWrap
        >
          Touch
        </Typography>

        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant={xsScreen ? "subtitle1" : "h6"}
              color="textSecondary"
              className={`${classes.subHeading} ${globalClasses.leftHeading}`}
            >
              {contact.para}
            </Typography>

            <ContactCard />
          </Grid>

          <Grid item xs={12} md={6} className={classes.animation}>
            <DisplayLottie animationData={contactAnimation} />
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}

export default Contact;
