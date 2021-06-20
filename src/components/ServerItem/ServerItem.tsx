import * as Types from "./ServerItem.types";
import * as Styles from "./ServerItem.styles";
import ServerStatus from "components/ServerStatus";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { usePopper } from "react-popper";
import useOnclickOutside from "react-cool-onclickoutside";
import ServerDropdown from "components/ServerDropdown";

const ServerItem = ({ server }: Types.Props) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const clickOutsideRef = useOnclickOutside(() => {
    setIsDropdownOpen(false);
  });

  return (
    <Styles.Container key={server.id}>
      <Styles.ServerContainer>
        <Styles.Name>{server.name}</Styles.Name>
        <ServerStatus status={server.status} />
      </Styles.ServerContainer>
      <Styles.Flex
        ref={setReferenceElement}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Styles.IconContainer ref={clickOutsideRef}>
          <BsThreeDots color="#9ca7d3" />
        </Styles.IconContainer>
      </Styles.Flex>
      {isDropdownOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={clickOutsideRef}>
            <ServerDropdown
              onOptionClicked={() => setIsDropdownOpen(false)}
              server={server}
            />
          </div>
        </div>
      )}
    </Styles.Container>
  );
};

export default ServerItem;
