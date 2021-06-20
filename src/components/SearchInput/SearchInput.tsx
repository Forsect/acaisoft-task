import * as Types from "./SearchInput.types";
import * as Styles from "./SearchInput.styles";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ onTextChanged }: Types.Props) => {
  return (
    <Styles.Container>
      <FiSearch color="#A9AEC1" size={18} />
      <Styles.Input
        type="text"
        placeholder="Search"
        onChange={(e) => onTextChanged(e.currentTarget.value)}
      />
    </Styles.Container>
  );
};

export default SearchInput;
