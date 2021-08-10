import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import useGlobalStyles from "../../hooks/useGlobalStyles";
import ProjectCards from "./ProjectCards";

const useStyles = makeStyles((theme) => ({
  cardsGrid: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(9),
    },
  },
}));

function Projects() {
  const globalClasses = useGlobalStyles();
  const classes = useStyles();

  return (
    <Fade bottom>
      <Container fixed className={globalClasses.container} id="projects">
        <Typography
          variant="h2"
          display="inline"
          color="primary"
          className={`${globalClasses.heading} ${globalClasses.leftHeading}`}
        >
          Pro
        </Typography>

        <Typography
          variant="h2"
          display="inline"
          color="textPrimary"
          className={globalClasses.heading}
        >
          jects
        </Typography>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          className={classes.cardsGrid}
        >
          <ProjectCards />
        </Grid>
      </Container>
    </Fade>
  );
}

export default Projects;
