import { FaRegCircle } from "react-icons/fa";
import * as Styles from "./NavBar.styles";

const NavBar = () => {
  return (
    <Styles.Container>
      <Styles.Option>
        <FaRegCircle size={17} color="#7D82F7" />
        <Styles.Text>Recruitment task</Styles.Text>
      </Styles.Option>
      <Styles.Divider />
    </Styles.Container>
  );
};

export default NavBar;
