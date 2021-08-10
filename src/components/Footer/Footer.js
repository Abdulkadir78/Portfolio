import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import emoji from "react-easy-emoji";
import Fade from "react-reveal/Fade";

import { footer, colors } from "../../constants";
import useGlobalStyles from "../../hooks/useGlobalStyles";

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    paddingBlock: "1.2rem",
    marginTop: "2rem",
  },
  link: {
    textDecorationStyle: "dotted",
    textDecorationColor: colors.textGrey,
    textUnderlineOffset: "1.5px",
    WebkitTapHighlightColor: "transparent",
  },
});

function Footer() {
  const globalClasses = useGlobalStyles();
  const classes = useStyles();
  const theme = useTheme();

  const screen330 = useMediaQuery(theme.breakpoints.down("330"));
  const variant = screen330 ? "subtitle2" : "subtitle1";

  return (
    <Fade bottom>
      <Paper elevation={2} square className={classes.footer}>
        <Typography color="textPrimary" variant={variant} display="inline">
          {emoji("Made with ♥ and ")}
        </Typography>

        <Typography
          color="primary"
          variant={variant}
          display="inline"
          className={globalClasses.heading}
        >
          {"</> "}
        </Typography>

        <Typography color="textPrimary" variant={variant} display="inline">
          by{" "}
        </Typography>

        <a
          href="https://github.com/Abdulkadir78"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <Typography color="textPrimary" variant={variant} display="inline">
            {footer.author}
          </Typography>
        </a>
      </Paper>
    </Fade>
  );
}

export default Footer;
