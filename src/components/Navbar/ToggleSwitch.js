import Switch from "@material-ui/core/Switch";

function ToggleSwitch({ darkTheme, toggleTheme }) {
  const handleSwitch = () => toggleTheme();

  return <Switch color="primary" checked={darkTheme} onChange={handleSwitch} />;
}

export default ToggleSwitch;
