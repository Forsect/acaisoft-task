import * as Types from "./ServerStatus.types";
import * as Styles from "./ServerStatus.styles";
import * as SharedTypes from "shared/types";
import { BsFillCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const ServerStatus = ({ status }: Types.Props) => {
  const Status = () => {
    switch (status) {
      case SharedTypes.Status.ONLINE:
        return (
          <>
            <Styles.IconWrapper>
              <BsFillCircleFill size={7} color="#33CAD4" />
            </Styles.IconWrapper>
            <Styles.Online>ONLINE</Styles.Online>
          </>
        );
      case SharedTypes.Status.OFFLINE:
        return (
          <>
            <Styles.IconWrapper>
              <IoClose color="#f00" />
            </Styles.IconWrapper>
            <Styles.Offline>OFFLINE</Styles.Offline>
          </>
        );
      case SharedTypes.Status.REBOOTING:
        return <Styles.Reboot>REBOOTING...</Styles.Reboot>;
    }
  };

  return (
    <Styles.Container>
      <Status />
    </Styles.Container>
  );
};

export default ServerStatus;
