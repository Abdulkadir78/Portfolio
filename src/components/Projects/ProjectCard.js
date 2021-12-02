import { makeStyles, useTheme } from "@material-ui/core/styles";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Box from "@material-ui/core/Box";

import { colors } from "../../constants";
import useGlobalStyles from "../../hooks/useGlobalStyles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    paddingBottom: 0,
  },
  content: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
  },
  bodyContainer: {
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  heading: {
    textTransform: "capitalize",
  },
  line: {
    marginBottom: theme.spacing(1.7),
    borderBottom: `1px ${colors.textGrey} solid`,
    width: "1000%",
  },
  body: {
    fontWeight: `${theme.palette.type === "dark" ? "bold" : "normal"}`,
    marginBlock: theme.spacing(2),
  },
  tagContainer: {
    marginTop: "auto",
    marginBottom: "7px",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3.5),
    },
  },
  tagGrid: {
    display: "flex",
    alignItems: "center",
  },
  techCircle: {
    width: "9.7px",
    height: "9.7px",
    borderRadius: "9.7px",
    marginRight: theme.spacing(0.5),
  },
}));

function ProjectCard({ project }) {
  const theme = useTheme();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        action={
          <>
            <Tooltip
              title="Source"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <IconButton
                color="inherit"
                href={project.codeLink}
                aria-label="code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size="23" />
              </IconButton>
            </Tooltip>

            {project.demoLink ? (
              <Tooltip title="Demo" placement="top" arrow>
                <IconButton
                  color="inherit"
                  href={project.demoLink}
                  aria-label="code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size="23" />
                </IconButton>
              </Tooltip>
            ) : null}
          </>
        }
      />

      <CardContent className={classes.content}>
        <Box>
          <Typography color="inherit">
            <RiGitRepositoryLine size="23" />
          </Typography>
        </Box>

        <Box className={classes.bodyContainer}>
          <Typography
            variant="h6"
            color={theme.palette.type === "dark" ? "inherit" : "primary"}
            className={`${classes.heading} ${globalClasses.heading}`}
            gutterBottom
          >
            {project.title}
          </Typography>

          <Typography className={classes.line} />

          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.body}
          >
            {project.body}
          </Typography>
        </Box>
      </CardContent>

      <CardActions className={classes.tagContainer}>
        <Grid container spacing={3}>
          {project.tags.map((tag, index) => (
            <Grid item key={index} className={classes.tagGrid}>
              <Typography
                className={classes.techCircle}
                style={{ backgroundColor: `${colors[tag.toLowerCase()]}` }}
              />
              <Typography color="textPrimary">{tag}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
