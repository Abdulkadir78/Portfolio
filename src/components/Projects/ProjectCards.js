import Grid from "@material-ui/core/Grid";

import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";

function ProjectCards() {
  return projects.map((project, index) => (
    <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
      <ProjectCard project={project} />
    </Grid>
  ));
}

export default ProjectCards;
