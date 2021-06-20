import * as Styles from "./ServerList.styles";
import * as Types from "./ServerList.types";
import { BsThreeDots } from "react-icons/bs";
import ServerStatus from "components/ServerStatus";

const ServerList = ({ servers }: Types.Props) => {
  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.ServerContainer>
          <Styles.NameHeader>NAME</Styles.NameHeader>
          <Styles.StatusHeader>STATUS</Styles.StatusHeader>
        </Styles.ServerContainer>
      </Styles.HeaderContainer>
      {servers.map((server) => (
        <Styles.ServerRow>
          <Styles.ServerContainer key={server.id}>
            <Styles.Name>{server.name}</Styles.Name>
            <ServerStatus status={server.status} />
          </Styles.ServerContainer>
          <BsThreeDots color="#9ca7d3" />
        </Styles.ServerRow>
      ))}
    </Styles.Container>
  );
};

export default ServerList;
