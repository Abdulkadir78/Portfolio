import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { projects } from "../../constants";
import useGlobalStyles from "../../hooks/useGlobalStyles";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  showMoreBtn: {
    marginTop: theme.spacing(2),
  },
}));

function ProjectCards() {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const xsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleToggleShowMore = () => {
    setShowMore((prevValue) => !prevValue);
  };

  return (
    <>
      {(projects.length > 6 && !showMore ? projects.slice(0, 6) : projects).map(
        (project, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        )
      )}

      {projects.length > 6 && (
        <Grid container justifyContent="center">
          <Button
            variant="outlined"
            color="primary"
            size={xsScreen ? "medium" : "large"}
            className={`${globalClasses.btn} ${classes.showMoreBtn}`}
            onClick={handleToggleShowMore}
          >
            Show {showMore ? "Less" : "More"}
          </Button>
        </Grid>
      )}
    </>
  );
}

export default ProjectCards;
