import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";

import { navLinks } from "../../constants";
import ToggleSwitch from "./ToggleSwitch";

function DesktopNav({ darkTheme, toggleTheme }) {
  return (
    <>
      {navLinks.map((navLink, index) => (
        <Link key={index} to={navLink} smooth={true} offset={-90} duration={0}>
          <Button size="large">{navLink}</Button>
        </Link>
      ))}

      <ToggleSwitch darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </>
  );
}

export default DesktopNav;
