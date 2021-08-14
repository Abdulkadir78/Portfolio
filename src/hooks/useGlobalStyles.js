import { makeStyles } from "@material-ui/core/styles";

import { colors } from "../constants";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: colors.primary,

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
      paddingInline: theme.spacing(8),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(8),
      paddingInline: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(15),
    },
  },
  heading: {
    fontWeight: "bold",
  },
  leftHeading: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(9),
    },
  },
  btn: {
    fontWeight: "bold",
  },
}));

function useGlobalStyles() {
  return useStyles();
}

export default useGlobalStyles;
