import { makeStyles } from "@material-ui/core/styles";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import { contact, colors } from "../../constants";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(4),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(9),
      width: "80%",
    },
  },
  link: {
    display: "block",
    wordBreak: "break-word",
    textTransform: "lowercase",
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
    },
  },
  linkedIn: {
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2.5),
    },
  },
  emailBox: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      paddingInline: theme.spacing(1),
    },
  },
  linkedInBox: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2.7),
      paddingInline: theme.spacing(1),
    },
  },
}));

function ContactCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box
          alignItems="center"
          display={{ sm: "flex" }}
          className={classes.emailBox}
        >
          <HiOutlineMail color={colors.emailLogo} size="40" />

          <Button
            href="mailto: shekhaabdulkadir@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {contact.email}
          </Button>
        </Box>

        <Box
          alignItems="center"
          display={{ sm: "flex" }}
          mt={2.5}
          className={classes.linkedInBox}
        >
          <FaLinkedinIn color={colors.linkedInLogo} size="30" />

          <Button
            href="https://www.linkedin.com/in/abdulkadir-shekha"
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.link} ${classes.linkedIn}`}
          >
            {contact.linkedIn}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ContactCard;
