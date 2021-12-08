import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function Skill({ icon: Icon, text }) {
  const theme = useTheme();

  return (
    <>
      {Icon}

      <Typography
        align="center"
        color="textSecondary"
        style={{
          fontWeight: `${theme.palette.type === "dark" ? "bold" : "normal"}`,
          marginTop: theme.spacing(0.5),
        }}
      >
        {text}
      </Typography>
    </>
  );
}

export default Skill;
