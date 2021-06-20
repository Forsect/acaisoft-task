import * as Types from "./ServerDropdown.types";
import * as Styles from "./ServerDropdown.styles";
import { Status } from "shared/types";
import useServersContext from "hooks/useServersContext";

const ServerDropdown = ({ server, onOptionClicked }: Types.Props) => {
  const { turnOnServer, turnOffServer, rebootServer } = useServersContext();
  const isDisabled = server.status === Status.REBOOTING;

  const Dropdown = () => {
    switch (server.status) {
      case Status.ONLINE:
      case Status.REBOOTING:
        return (
          <>
            <Styles.Option
              isDisabled={isDisabled}
              onClick={() => {
                if (!isDisabled) {
                  turnOffServer(server.id);
                  onOptionClicked();
                }
              }}
            >
              Turn off
            </Styles.Option>
            <Styles.Option
              isDisabled={isDisabled}
              onClick={() => {
                if (!isDisabled) {
                  rebootServer(server.id);
                  onOptionClicked();
                }
              }}
            >
              Reboot
            </Styles.Option>
          </>
        );
      case Status.OFFLINE:
        return (
          <Styles.Option
            onClick={() => {
              turnOnServer(server.id);
              onOptionClicked();
            }}
          >
            Turn on
          </Styles.Option>
        );
    }
  };

  return (
    <Styles.Container>
      <Dropdown />
    </Styles.Container>
  );
};

export default ServerDropdown;
